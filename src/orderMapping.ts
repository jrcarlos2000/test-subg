import { BigInt } from "@graphprotocol/graph-ts"
import {
  OrderBook,
  CancelDecreaseOrder,
  CancelIncreaseOrder,
  CancelSwapOrder,
  CreateDecreaseOrder,
  CreateIncreaseOrder,
  CreateSwapOrder,
  ExecuteDecreaseOrder,
  ExecuteIncreaseOrder,
  ExecuteSwapOrder,
  Initialize,
  UpdateDecreaseOrder,
  UpdateGov,
  UpdateIncreaseOrder,
  UpdateMinExecutionFee,
  UpdateMinPurchaseTokenAmountUsd,
  UpdateSwapOrder
} from "../generated/OrderBook/OrderBook"
import { orderEntity } from "../generated/schema"

export function handleCancelDecreaseOrder(event: CancelDecreaseOrder): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = orderEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new orderEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.account = event.params.account
  entity.orderIndex = event.params.orderIndex

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.PRICE_PRECISION(...)
  // - contract.USDG_PRECISION(...)
  // - contract.decreaseOrders(...)
  // - contract.decreaseOrdersIndex(...)
  // - contract.getDecreaseOrder(...)
  // - contract.getIncreaseOrder(...)
  // - contract.getSwapOrder(...)
  // - contract.getUsdgMinPrice(...)
  // - contract.gov(...)
  // - contract.increaseOrders(...)
  // - contract.increaseOrdersIndex(...)
  // - contract.isInitialized(...)
  // - contract.minExecutionFee(...)
  // - contract.minPurchaseTokenAmountUsd(...)
  // - contract.router(...)
  // - contract.swapOrders(...)
  // - contract.swapOrdersIndex(...)
  // - contract.usdg(...)
  // - contract.validatePositionOrderPrice(...)
  // - contract.validateSwapOrderPriceWithTriggerAboveThreshold(...)
  // - contract.vault(...)
  // - contract.weth(...)
}

export function handleCancelIncreaseOrder(event: CancelIncreaseOrder): void {}

export function handleCancelSwapOrder(event: CancelSwapOrder): void {}

export function handleCreateDecreaseOrder(event: CreateDecreaseOrder): void {}

export function handleCreateIncreaseOrder(event: CreateIncreaseOrder): void {}

export function handleCreateSwapOrder(event: CreateSwapOrder): void {}

export function handleExecuteDecreaseOrder(event: ExecuteDecreaseOrder): void {}

export function handleExecuteIncreaseOrder(event: ExecuteIncreaseOrder): void {}

export function handleExecuteSwapOrder(event: ExecuteSwapOrder): void {}

export function handleInitialize(event: Initialize): void {}

export function handleUpdateDecreaseOrder(event: UpdateDecreaseOrder): void {}

export function handleUpdateGov(event: UpdateGov): void {}

export function handleUpdateIncreaseOrder(event: UpdateIncreaseOrder): void {}

export function handleUpdateMinExecutionFee(
  event: UpdateMinExecutionFee
): void {}

export function handleUpdateMinPurchaseTokenAmountUsd(
  event: UpdateMinPurchaseTokenAmountUsd
): void {}

export function handleUpdateSwapOrder(event: UpdateSwapOrder): void {}
