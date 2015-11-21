'use strict';
import homeModule from './modules/home/home.module';
import layoutModule from './modules/layout/layout.module'
import Config from './config';

var appModule = angular.module("CpApp", ["ui.router", homeModule.name, layoutModule]);

appModule.config(Config);

