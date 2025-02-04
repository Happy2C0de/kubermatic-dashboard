// Copyright 2020 The Kubermatic Kubernetes Platform contributors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {animate, keyframes, style, transition, trigger} from '@angular/animations';

export const pushToSide = trigger('pushToSide', [
  transition(':enter', [
    style({
      opacity: 0,
      width: 0,
    }),
    animate('.25s', style({opacity: 1, width: '*'})),
  ]),
  transition(':leave', [animate('.25s', style({opacity: 0, width: 0}))]),
]);

export const pushDown = trigger('pushDown', [
  transition(':enter', [
    style({
      opacity: 0,
      height: 0,
    }),
    animate(
      '.25s',
      keyframes([style({opacity: 0, height: '*', offset: 0.5}), style({opacity: 1, height: '*', offset: 1})])
    ),
  ]),
  transition(':leave', [animate('.25s', style({opacity: 0, height: 0}))]),
]);
