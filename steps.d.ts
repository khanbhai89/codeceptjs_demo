/// <reference types='codeceptjs' />

type steps_file = typeof import("./steps_file.js");
type CustomHelper = import("./helpers/CustomHelper");
type AssertWrapper = import("codeceptjs-assert");
type REST = typeof import("codeceptjs");
declare namespace CodeceptJS {
  interface Methods extends Playwright, CustomHelper, AssertWrapper, REST {}

  interface I extends Methods {}
}
