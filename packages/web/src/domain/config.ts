import { Config as CoreConfig } from "@oriun/core/lib/domain/config"
import { Module } from "@oriun/core/lib/domain/module";

export interface Config extends CoreConfig {
  modules?: Module[];
}
