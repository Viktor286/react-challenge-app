import { IValidationInspectionObject } from './InspectionObject';

export interface IUrlValidation extends IValidationInspectionObject {}

export function createInputUrlValidation(isValid: boolean, errorMsg: string) {
  return {
    isValid,
    errorMsg,
  };
}

export function validateInputDataTableUrl(url: string): IUrlValidation {
  let errorMsgStack: string[] = [];
  let isValid = true;

  if (url.length < 5) {
    errorMsgStack.push('Url looks too short.');
    isValid = false;

    return {
      isValid,
      errorMsg: errorMsgStack.join(' '),
    };
  }

  if (!isUrlPatterCorrect(url)) {
    errorMsgStack.push("Url doesn't look correct");
    isValid = false;

    return {
      isValid,
      errorMsg: errorMsgStack.join(' '),
    };
  }

  if (!url.toLowerCase().endsWith('.json')) {
    errorMsgStack.push('Only json files are supported');
    isValid = false;

    return {
      isValid,
      errorMsg: errorMsgStack.join(' '),
    };
  }

  return {
    isValid,
    errorMsg: errorMsgStack.join(' '),
  };
}

// https://stackoverflow.com/a/5717133/4820094
export function isUrlPatterCorrect(str: string) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
}
