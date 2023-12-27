import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const visibleHiddenAnimation: AnimationTriggerMetadata = trigger('visibleHidden', [
  state('visible', style({
    opacity: 1
  })),
  state('hidden', style({
    opacity: 0
  })),
  transition('hidden => visible', [
    animate('500ms')
  ]),
  transition('visible => hidden', [
    animate('0ms')
  ])
]);
