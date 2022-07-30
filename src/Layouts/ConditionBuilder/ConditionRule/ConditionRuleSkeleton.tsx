import { Skeleton, Box } from '@mui/material';
import { conditionRuleSx, conditionRuleHeight, ConditionRuleLayoutSx } from './ConditionRule';

export function ConditionRuleSkeleton() {
  return (
    <Box sx={ConditionRuleLayoutSx}>
      <Skeleton sx={conditionRuleSx} variant="rectangular" />
      <Skeleton sx={conditionRuleSx} variant="rectangular" />
      <Skeleton sx={conditionRuleSx} variant="rectangular" />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Skeleton width={conditionRuleHeight} height={conditionRuleHeight} variant="circular" />
        <Skeleton width={conditionRuleHeight} height={conditionRuleHeight} variant="circular" />
      </Box>
    </Box>
  );
}

export function ConditionRuleSkeletonSolid() {
  return (
    <Skeleton
      variant="rectangular"
      sx={{
        display: 'block',
        width: '100%',
        height: conditionRuleHeight,
        borderRadius: '5px',
      }}
    />
  );
}
