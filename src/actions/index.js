export const SET_STACK = "SET_STACK";
export const LOAD_STACKS = "LOAD_STACKS";
export const ADD_STACK = "ADD_STACK";

// setStack action creator
export function setStack(stack) {
  return {
    type: SET_STACK,
    stack: stack
  };
}

// loadStacks action creator
export function loadStacks(stacks) {
  return {
    type: LOAD_STACKS,
    stacks
  };
}

export function addStack(stack) {
  return {
    type: ADD_STACK,
    stack
  };
}
