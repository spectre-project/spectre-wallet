import * as spectrecore from '@spectre/core-lib';
import {UnspentOutputInfo} from '../types/custom-types';
export class UnspentOutput extends spectrecore.Transaction.UnspentOutput {
	blockDaaScore: number;
	scriptPublicKeyVersion: number;
	id:string;
	signatureOPCount:number;
	mass:number;
	isCoinbase:boolean;
	scriptPubKey:string;
	constructor(o: UnspentOutputInfo) {
		super(o);
		this.blockDaaScore = o.blockDaaScore;
		this.scriptPublicKeyVersion = o.scriptPublicKeyVersion;
		this.id = this.txId + this.outputIndex;
		this.signatureOPCount = this.script.getSignatureOperationsCount();
		this.mass = this.signatureOPCount * spectrecore.Transaction.MassPerSigOp;
		this.mass+= 151 * spectrecore.Transaction.MassPerTxByte; //standalone mass 
		this.isCoinbase = o.isCoinbase,
		this.scriptPubKey = o.scriptPubKey
	}
}
