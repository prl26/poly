/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace Poly {
  export type ConditionInfoStruct = {
    amount: BigNumberish;
    toWin: BigNumberish;
  };

  export type ConditionInfoStructOutput = [amount: bigint, toWin: bigint] & {
    amount: bigint;
    toWin: bigint;
  };
}

export interface PolyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "KYCAddress"
      | "_feeAmount"
      | "addKYCAddress"
      | "casinoChips"
      | "changeFeeReceiver"
      | "feeTo"
      | "getOrderInfo"
      | "initialize"
      | "optionStatus"
      | "owner"
      | "payoutNumerators"
      | "payoutPosition"
      | "placeOrder"
      | "prepareCondition"
      | "renounceOwnership"
      | "reportPayouts"
      | "setCasinoChips"
      | "setFeeAmount"
      | "totalAmountBet"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ConditionPayout"
      | "ConditionPreparation"
      | "Initialized"
      | "OwnershipTransferred"
      | "casinoChipsChanged"
      | "feeAmountChanged"
      | "feeReceiverChanged"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "KYCAddress",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_feeAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addKYCAddress",
    values: [string, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "casinoChips",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeFeeReceiver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getOrderInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "optionStatus",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payoutNumerators",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "payoutPosition",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "placeOrder",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "prepareCondition",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reportPayouts",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCasinoChips",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAmountBet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "KYCAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_feeAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addKYCAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "casinoChips",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeFeeReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOrderInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "optionStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payoutNumerators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payoutPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "placeOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "prepareCondition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reportPayouts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCasinoChips",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAmountBet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace ConditionPayoutEvent {
  export type InputTuple = [conditionId: string, payoutAddress: AddressLike];
  export type OutputTuple = [conditionId: string, payoutAddress: string];
  export interface OutputObject {
    conditionId: string;
    payoutAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ConditionPreparationEvent {
  export type InputTuple = [
    conditionId: string,
    outcomeSlotCount: BigNumberish
  ];
  export type OutputTuple = [conditionId: string, outcomeSlotCount: bigint];
  export interface OutputObject {
    conditionId: string;
    outcomeSlotCount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace casinoChipsChangedEvent {
  export type InputTuple = [olderToken: AddressLike, newToken: AddressLike];
  export type OutputTuple = [olderToken: string, newToken: string];
  export interface OutputObject {
    olderToken: string;
    newToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace feeAmountChangedEvent {
  export type InputTuple = [feeAmount: BigNumberish];
  export type OutputTuple = [feeAmount: bigint];
  export interface OutputObject {
    feeAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace feeReceiverChangedEvent {
  export type InputTuple = [
    olderReceiver: AddressLike,
    newReceiver: AddressLike
  ];
  export type OutputTuple = [olderReceiver: string, newReceiver: string];
  export interface OutputObject {
    olderReceiver: string;
    newReceiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Poly extends BaseContract {
  connect(runner?: ContractRunner | null): Poly;
  waitForDeployment(): Promise<this>;

  interface: PolyInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  KYCAddress: TypedContractMethod<
    [arg0: string, arg1: BigNumberish],
    [string],
    "view"
  >;

  _feeAmount: TypedContractMethod<[], [bigint], "view">;

  addKYCAddress: TypedContractMethod<
    [conditonId: string, _addrs: AddressLike[]],
    [void],
    "nonpayable"
  >;

  casinoChips: TypedContractMethod<[], [string], "view">;

  changeFeeReceiver: TypedContractMethod<
    [_newFeeReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  feeTo: TypedContractMethod<[], [string], "view">;

  getOrderInfo: TypedContractMethod<
    [conditionId: string],
    [
      [bigint, Poly.ConditionInfoStructOutput[]] & {
        total: bigint;
        details: Poly.ConditionInfoStructOutput[];
      }
    ],
    "view"
  >;

  initialize: TypedContractMethod<
    [initialOwner: AddressLike, token: AddressLike, _feeTo: AddressLike],
    [void],
    "nonpayable"
  >;

  optionStatus: TypedContractMethod<[arg0: string], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  payoutNumerators: TypedContractMethod<
    [arg0: string, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  payoutPosition: TypedContractMethod<[arg0: string], [string], "view">;

  placeOrder: TypedContractMethod<
    [conditionId: string, position: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  prepareCondition: TypedContractMethod<
    [conditionId: string, outcomeSlotCount: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  reportPayouts: TypedContractMethod<
    [conditionId: string, position: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCasinoChips: TypedContractMethod<
    [_newTokenAddr: AddressLike],
    [void],
    "nonpayable"
  >;

  setFeeAmount: TypedContractMethod<[_fee: BigNumberish], [void], "nonpayable">;

  totalAmountBet: TypedContractMethod<[arg0: string], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "KYCAddress"
  ): TypedContractMethod<[arg0: string, arg1: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "_feeAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addKYCAddress"
  ): TypedContractMethod<
    [conditonId: string, _addrs: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "casinoChips"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "changeFeeReceiver"
  ): TypedContractMethod<[_newFeeReceiver: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "feeTo"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getOrderInfo"
  ): TypedContractMethod<
    [conditionId: string],
    [
      [bigint, Poly.ConditionInfoStructOutput[]] & {
        total: bigint;
        details: Poly.ConditionInfoStructOutput[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [initialOwner: AddressLike, token: AddressLike, _feeTo: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "optionStatus"
  ): TypedContractMethod<[arg0: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "payoutNumerators"
  ): TypedContractMethod<[arg0: string, arg1: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "payoutPosition"
  ): TypedContractMethod<[arg0: string], [string], "view">;
  getFunction(
    nameOrSignature: "placeOrder"
  ): TypedContractMethod<
    [conditionId: string, position: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "prepareCondition"
  ): TypedContractMethod<
    [conditionId: string, outcomeSlotCount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "reportPayouts"
  ): TypedContractMethod<
    [conditionId: string, position: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCasinoChips"
  ): TypedContractMethod<[_newTokenAddr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFeeAmount"
  ): TypedContractMethod<[_fee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalAmountBet"
  ): TypedContractMethod<[arg0: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "ConditionPayout"
  ): TypedContractEvent<
    ConditionPayoutEvent.InputTuple,
    ConditionPayoutEvent.OutputTuple,
    ConditionPayoutEvent.OutputObject
  >;
  getEvent(
    key: "ConditionPreparation"
  ): TypedContractEvent<
    ConditionPreparationEvent.InputTuple,
    ConditionPreparationEvent.OutputTuple,
    ConditionPreparationEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "casinoChipsChanged"
  ): TypedContractEvent<
    casinoChipsChangedEvent.InputTuple,
    casinoChipsChangedEvent.OutputTuple,
    casinoChipsChangedEvent.OutputObject
  >;
  getEvent(
    key: "feeAmountChanged"
  ): TypedContractEvent<
    feeAmountChangedEvent.InputTuple,
    feeAmountChangedEvent.OutputTuple,
    feeAmountChangedEvent.OutputObject
  >;
  getEvent(
    key: "feeReceiverChanged"
  ): TypedContractEvent<
    feeReceiverChangedEvent.InputTuple,
    feeReceiverChangedEvent.OutputTuple,
    feeReceiverChangedEvent.OutputObject
  >;

  filters: {
    "ConditionPayout(string,address)": TypedContractEvent<
      ConditionPayoutEvent.InputTuple,
      ConditionPayoutEvent.OutputTuple,
      ConditionPayoutEvent.OutputObject
    >;
    ConditionPayout: TypedContractEvent<
      ConditionPayoutEvent.InputTuple,
      ConditionPayoutEvent.OutputTuple,
      ConditionPayoutEvent.OutputObject
    >;

    "ConditionPreparation(string,uint256)": TypedContractEvent<
      ConditionPreparationEvent.InputTuple,
      ConditionPreparationEvent.OutputTuple,
      ConditionPreparationEvent.OutputObject
    >;
    ConditionPreparation: TypedContractEvent<
      ConditionPreparationEvent.InputTuple,
      ConditionPreparationEvent.OutputTuple,
      ConditionPreparationEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "casinoChipsChanged(address,address)": TypedContractEvent<
      casinoChipsChangedEvent.InputTuple,
      casinoChipsChangedEvent.OutputTuple,
      casinoChipsChangedEvent.OutputObject
    >;
    casinoChipsChanged: TypedContractEvent<
      casinoChipsChangedEvent.InputTuple,
      casinoChipsChangedEvent.OutputTuple,
      casinoChipsChangedEvent.OutputObject
    >;

    "feeAmountChanged(uint256)": TypedContractEvent<
      feeAmountChangedEvent.InputTuple,
      feeAmountChangedEvent.OutputTuple,
      feeAmountChangedEvent.OutputObject
    >;
    feeAmountChanged: TypedContractEvent<
      feeAmountChangedEvent.InputTuple,
      feeAmountChangedEvent.OutputTuple,
      feeAmountChangedEvent.OutputObject
    >;

    "feeReceiverChanged(address,address)": TypedContractEvent<
      feeReceiverChangedEvent.InputTuple,
      feeReceiverChangedEvent.OutputTuple,
      feeReceiverChangedEvent.OutputObject
    >;
    feeReceiverChanged: TypedContractEvent<
      feeReceiverChangedEvent.InputTuple,
      feeReceiverChangedEvent.OutputTuple,
      feeReceiverChangedEvent.OutputObject
    >;
  };
}