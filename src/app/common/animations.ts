import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';

export let accordionToggle = trigger('accordion_body', [
  transition(':enter', [
    style({ height: 0, overflow: 'hidden' }),
    animate('.3s ease', style({ height: '*' })),
  ]),
  transition(':leave', [
    style({ height: '*', overflow: 'hidden' }),
    animate('.3s ease', style({ height: 0 })),
  ]),
]);

export let svgRotate = trigger('svgRotate', [
  state('default', style({ transform: 'rotate(0)' })),
  state('rotated', style({ transform: 'rotate(-180deg)' })),
  transition('rotated => default', animate('400ms ease-out')),
  transition('default => rotated', animate('400ms ease-in')),
]);
