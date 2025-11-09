import {
  APP_INITIALIZER,
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { FeatureService } from './customer/feature.service';

export function provideFeatureFlagInitializer(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: APP_INITIALIZER,
      useFactory: (featureFlagService: FeatureService) => {
        return async () => {
          // Convert observable to promise safely
          await featureFlagService.loadFlags().toPromise();
        };
      },
      deps: [FeatureService],
      multi: true,
    },
  ]);
}
