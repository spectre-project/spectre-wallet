import {log, FlowLogger} from "./utils/logger";
import {Wallet, Storage, spectrecore, CONFIRMATION_COUNT, COINBASE_CFM_COUNT} from "./wallet/wallet";
import {initSpectreFramework} from './wallet/initSpectreFramework';
import {EventTargetImpl} from './wallet/event-target-impl';
import * as helper from './utils/helper';

export {CONFIRMATION_COUNT, COINBASE_CFM_COUNT};
export {Wallet, initSpectreFramework, log, EventTargetImpl, helper, Storage, FlowLogger, spectrecore}
