// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CampaignApproved extends ethereum.Event {
  get params(): CampaignApproved__Params {
    return new CampaignApproved__Params(this);
  }
}

export class CampaignApproved__Params {
  _event: CampaignApproved;

  constructor(event: CampaignApproved) {
    this._event = event;
  }

  get campaignHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class CampaignBlocked extends ethereum.Event {
  get params(): CampaignBlocked__Params {
    return new CampaignBlocked__Params(this);
  }
}

export class CampaignBlocked__Params {
  _event: CampaignBlocked;

  constructor(event: CampaignBlocked) {
    this._event = event;
  }

  get campaignHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get blockReason(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class CampaignCreated extends ethereum.Event {
  get params(): CampaignCreated__Params {
    return new CampaignCreated__Params(this);
  }
}

export class CampaignCreated__Params {
  _event: CampaignCreated;

  constructor(event: CampaignCreated) {
    this._event = event;
  }

  get campaignHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get artist(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get title(): string {
    return this._event.parameters[2].value.toString();
  }

  get description(): string {
    return this._event.parameters[3].value.toString();
  }

  get goalTitle(): string {
    return this._event.parameters[4].value.toString();
  }

  get goals(): string {
    return this._event.parameters[5].value.toString();
  }

  get instagramHandle(): string {
    return this._event.parameters[6].value.toString();
  }

  get spotifyHandle(): string {
    return this._event.parameters[7].value.toString();
  }

  get yourStory(): string {
    return this._event.parameters[8].value.toString();
  }

  get NFTPicture(): string {
    return this._event.parameters[9].value.toString();
  }

  get targetAmount(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }

  get runningDurationInDays(): BigInt {
    return this._event.parameters[11].value.toBigInt();
  }
}

export class DonationReceived extends ethereum.Event {
  get params(): DonationReceived__Params {
    return new DonationReceived__Params(this);
  }
}

export class DonationReceived__Params {
  _event: DonationReceived;

  constructor(event: DonationReceived) {
    this._event = event;
  }

  get donor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get donationHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get campaignHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get targetAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NFTMinted extends ethereum.Event {
  get params(): NFTMinted__Params {
    return new NFTMinted__Params(this);
  }
}

export class NFTMinted__Params {
  _event: NFTMinted;

  constructor(event: NFTMinted) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get NFTAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get campaignId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get edition(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ReleaseFundToArtist extends ethereum.Event {
  get params(): ReleaseFundToArtist__Params {
    return new ReleaseFundToArtist__Params(this);
  }
}

export class ReleaseFundToArtist__Params {
  _event: ReleaseFundToArtist;

  constructor(event: ReleaseFundToArtist) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get releasedBy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountReleased(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get campaignID(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get artistWallet(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class Contract__getCampaignDetailsResultValue0Struct extends ethereum.Tuple {
  get artist(): Address {
    return this[0].toAddress();
  }

  get title(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get goalTitle(): string {
    return this[3].toString();
  }

  get goals(): string {
    return this[4].toString();
  }

  get instagramHandle(): string {
    return this[5].toString();
  }

  get spotifyHandle(): string {
    return this[6].toString();
  }

  get yourStory(): string {
    return this[7].toString();
  }

  get NFTPicture(): string {
    return this[8].toString();
  }

  get targetAmount(): BigInt {
    return this[9].toBigInt();
  }

  get startTimestamp(): BigInt {
    return this[10].toBigInt();
  }

  get runningDurationInDays(): BigInt {
    return this[11].toBigInt();
  }

  get state(): BigInt {
    return this[12].toBigInt();
  }

  get blockReason(): string {
    return this[13].toString();
  }
}

export class Contract__getCampaignDonorsResultValue0Struct extends ethereum.Tuple {
  get donor(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  campaignCounter(): BigInt {
    let result = super.call(
      "campaignCounter",
      "campaignCounter():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_campaignCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "campaignCounter",
      "campaignCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  campaignDonorsCount(param0: Bytes): BigInt {
    let result = super.call(
      "campaignDonorsCount",
      "campaignDonorsCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBigInt();
  }

  try_campaignDonorsCount(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "campaignDonorsCount",
      "campaignDonorsCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  campaignDonorsCounter(): BigInt {
    let result = super.call(
      "campaignDonorsCounter",
      "campaignDonorsCounter():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_campaignDonorsCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "campaignDonorsCounter",
      "campaignDonorsCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  campaignNFTs(param0: Bytes): Address {
    let result = super.call("campaignNFTs", "campaignNFTs(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_campaignNFTs(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "campaignNFTs",
      "campaignNFTs(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCampaignDetails(
    campaignId: Bytes
  ): Contract__getCampaignDetailsResultValue0Struct {
    let result = super.call(
      "getCampaignDetails",
      "getCampaignDetails(bytes32):((address,string,string,string,string,string,string,string,string,uint256,uint256,uint256,int256,string))",
      [ethereum.Value.fromFixedBytes(campaignId)]
    );

    return changetype<Contract__getCampaignDetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getCampaignDetails(
    campaignId: Bytes
  ): ethereum.CallResult<Contract__getCampaignDetailsResultValue0Struct> {
    let result = super.tryCall(
      "getCampaignDetails",
      "getCampaignDetails(bytes32):((address,string,string,string,string,string,string,string,string,uint256,uint256,uint256,int256,string))",
      [ethereum.Value.fromFixedBytes(campaignId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Contract__getCampaignDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getCampaignDonors(
    campaignId: Bytes
  ): Array<Contract__getCampaignDonorsResultValue0Struct> {
    let result = super.call(
      "getCampaignDonors",
      "getCampaignDonors(bytes32):((address,uint256)[])",
      [ethereum.Value.fromFixedBytes(campaignId)]
    );

    return result[0].toTupleArray<
      Contract__getCampaignDonorsResultValue0Struct
    >();
  }

  try_getCampaignDonors(
    campaignId: Bytes
  ): ethereum.CallResult<Array<Contract__getCampaignDonorsResultValue0Struct>> {
    let result = super.tryCall(
      "getCampaignDonors",
      "getCampaignDonors(bytes32):((address,uint256)[])",
      [ethereum.Value.fromFixedBytes(campaignId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Contract__getCampaignDonorsResultValue0Struct>()
    );
  }

  getCampaignUserNFTTokenId(campaignId: Bytes): BigInt {
    let result = super.call(
      "getCampaignUserNFTTokenId",
      "getCampaignUserNFTTokenId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(campaignId)]
    );

    return result[0].toBigInt();
  }

  try_getCampaignUserNFTTokenId(
    campaignId: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCampaignUserNFTTokenId",
      "getCampaignUserNFTTokenId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(campaignId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCampaignCall extends ethereum.Call {
  get inputs(): ApproveCampaignCall__Inputs {
    return new ApproveCampaignCall__Inputs(this);
  }

  get outputs(): ApproveCampaignCall__Outputs {
    return new ApproveCampaignCall__Outputs(this);
  }
}

export class ApproveCampaignCall__Inputs {
  _call: ApproveCampaignCall;

  constructor(call: ApproveCampaignCall) {
    this._call = call;
  }

  get campaignId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ApproveCampaignCall__Outputs {
  _call: ApproveCampaignCall;

  constructor(call: ApproveCampaignCall) {
    this._call = call;
  }
}

export class BlockedCampaignCall extends ethereum.Call {
  get inputs(): BlockedCampaignCall__Inputs {
    return new BlockedCampaignCall__Inputs(this);
  }

  get outputs(): BlockedCampaignCall__Outputs {
    return new BlockedCampaignCall__Outputs(this);
  }
}

export class BlockedCampaignCall__Inputs {
  _call: BlockedCampaignCall;

  constructor(call: BlockedCampaignCall) {
    this._call = call;
  }

  get campaignId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get blockReason(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class BlockedCampaignCall__Outputs {
  _call: BlockedCampaignCall;

  constructor(call: BlockedCampaignCall) {
    this._call = call;
  }
}

export class CreateCampaignCall extends ethereum.Call {
  get inputs(): CreateCampaignCall__Inputs {
    return new CreateCampaignCall__Inputs(this);
  }

  get outputs(): CreateCampaignCall__Outputs {
    return new CreateCampaignCall__Outputs(this);
  }
}

export class CreateCampaignCall__Inputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }

  get title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get goalTitle(): string {
    return this._call.inputValues[2].value.toString();
  }

  get goals(): string {
    return this._call.inputValues[3].value.toString();
  }

  get instagramHandle(): string {
    return this._call.inputValues[4].value.toString();
  }

  get spotifyHandle(): string {
    return this._call.inputValues[5].value.toString();
  }

  get yourStory(): string {
    return this._call.inputValues[6].value.toString();
  }

  get NFTPicture(): string {
    return this._call.inputValues[7].value.toString();
  }

  get runningDurationInDays(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get targetAmount(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }
}

export class CreateCampaignCall__Outputs {
  _call: CreateCampaignCall;

  constructor(call: CreateCampaignCall) {
    this._call = call;
  }
}

export class DonateCall extends ethereum.Call {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }

  get campaignId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class ReleaseFundCall extends ethereum.Call {
  get inputs(): ReleaseFundCall__Inputs {
    return new ReleaseFundCall__Inputs(this);
  }

  get outputs(): ReleaseFundCall__Outputs {
    return new ReleaseFundCall__Outputs(this);
  }
}

export class ReleaseFundCall__Inputs {
  _call: ReleaseFundCall;

  constructor(call: ReleaseFundCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get artistWallet(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get campaignId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ReleaseFundCall__Outputs {
  _call: ReleaseFundCall;

  constructor(call: ReleaseFundCall) {
    this._call = call;
  }
}
