import { BlueprintSliderParameterRequest } from './blueprint-slider-parameter-request';
import { BlueprintColorParameterRequest } from './blueprint-color-parameter-request';

export interface BlueprintConfigParametersRequest {
  slider?: BlueprintSliderParameterRequest;
  color?: BlueprintColorParameterRequest;
}
