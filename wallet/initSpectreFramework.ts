import { Wallet } from './wallet';

export const initSpectreFramework = async () => {
  // console.log("Spectre - framework: init");
  await Wallet.initRuntime();
  // console.log("Spectre - framework: ready");
};

