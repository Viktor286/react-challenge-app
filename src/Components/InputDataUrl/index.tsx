import React, { useEffect, useMemo, useState } from 'react';
import { batch } from 'react-redux';
import debounce from 'lodash.debounce';
import InputDataUrlLayout from '../../Layouts/InputDataUrl';
import { useAppDispatch } from '../../Features/Redux/hooks';
import { setDataTable, setIsLoading } from '../../Features/Redux/dataTableSlice';
import getDataTableKeys from '../../Features/getDataTableKeys';
import { resetConditionGroups } from '../../Features/Redux/conditionsSlice';
import { createInputUrlValidation, isUrlValid } from '../../Features/isUrlValid';
import { defaultDataUrl } from '../../Features/defaultSettings';

export default function InputDataUrl() {
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState(defaultDataUrl);
  const [validation, setValidation] = useState(isUrlValid(url));

  const { isValid: isInputUrlValid } = validation;

  const onInputDataChange = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>): void => {
        setUrl(e.target.value);
        setValidation(isUrlValid(e.target.value));
      }, 500),
    [],
  );

  useEffect(() => {
    let mounted = true;

    const getNewData = async (url: string) => {
      try {
        dispatch(setIsLoading({ isLoading: true }));

        const res = await fetch(url);
        const resultDataTable = await res.json();

        if (!mounted) return;

        if (Array.isArray(resultDataTable) && resultDataTable.length > 0) {
          // DataTable commit phase
          // TODO: extra validation for resultDataTable might be needed

          // Limit data to 10000
          const newDataTable =
            resultDataTable.length > 10000 ? resultDataTable.slice(0, 10000) : resultDataTable;

          batch(() => {
            const dataTableKeys = getDataTableKeys(newDataTable);
            dispatch(resetConditionGroups({ conditionOptions: dataTableKeys }));
            dispatch(setDataTable({ dataTable: newDataTable, dataTableKeys }));
          });
        } else {
          const { error, message } = resultDataTable;
          if (error) {
            setValidation(createInputUrlValidation(!error, `Request error: ${message}`));
          } else {
            setValidation(createInputUrlValidation(false, 'Something went wrong'));
          }
        }
      } catch (e) {
        setValidation(createInputUrlValidation(false, 'There was an error on request'));
      }
    };

    if (isInputUrlValid) {
      getNewData(url);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [isInputUrlValid, url, dispatch]);

  return <InputDataUrlLayout url={url} urlValidation={validation} onInputDataChange={onInputDataChange} />;
}
