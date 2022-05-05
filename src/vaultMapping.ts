import { BigInt, store } from "@graphprotocol/graph-ts"
import {
  Vault,
  BuyUSDG,
  ClosePosition,
  CollectMarginFees,
  CollectSwapFees,
  DecreaseGuaranteedUsd,
  DecreasePoolAmount,
  DecreasePosition,
  DecreaseReservedAmount,
  DecreaseUsdgAmount,
  DirectPoolDeposit,
  IncreaseGuaranteedUsd,
  IncreasePoolAmount,
  IncreasePosition,
  IncreaseReservedAmount,
  IncreaseUsdgAmount,
  LiquidatePosition,
  SellUSDG,
  Swap,
  UpdateFundingRate,
  UpdatePnl,
  UpdatePosition
} from "../generated/Vault/Vault"
import { ActivePosition } from "../generated/schema"

export function handleBuyUSDG(event: BuyUSDG): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = ActivePosition.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ActivePosition(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.account = event.params.account
  // entity.token = event.params.token

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.
}

export function handleClosePosition(event: ClosePosition): void {
  // remove ActivePosition
  let id = event.params.key.toHexString();
  store.remove('ActivePosition', id);
}

export function handleCollectMarginFees(event: CollectMarginFees): void {}

export function handleCollectSwapFees(event: CollectSwapFees): void {}

export function handleDecreaseGuaranteedUsd(
  event: DecreaseGuaranteedUsd
): void {}

export function handleDecreasePoolAmount(event: DecreasePoolAmount): void {}

export function handleDecreasePosition(event: DecreasePosition): void {}

export function handleDecreaseReservedAmount(
  event: DecreaseReservedAmount
): void {}

export function handleDecreaseUsdgAmount(event: DecreaseUsdgAmount): void {}

export function handleDirectPoolDeposit(event: DirectPoolDeposit): void {}

export function handleIncreaseGuaranteedUsd(
  event: IncreaseGuaranteedUsd
): void {}

export function handleIncreasePoolAmount(event: IncreasePoolAmount): void {}

export function handleIncreasePosition(event: IncreasePosition): void {
  // 创建新的 or 更新 ActivePosition
  let entity = new ActivePosition(event.params.key.toHexString())
  entity.account = event.params.account.toHexString();
  entity.collateralToken = event.params.collateralToken.toHexString();
  entity.indexToken = event.params.indexToken.toHexString();
  entity.isLong = event.params.isLong;
  entity.save()
}

export function handleIncreaseReservedAmount(
  event: IncreaseReservedAmount
): void {}

export function handleIncreaseUsdgAmount(event: IncreaseUsdgAmount): void {}

export function handleLiquidatePosition(event: LiquidatePosition): void {
  // remove ActivePosition
  let id = event.params.key.toHexString();
  store.remove('ActivePosition', id);
}

export function handleSellUSDG(event: SellUSDG): void {}

export function handleSwap(event: Swap): void {}

export function handleUpdateFundingRate(event: UpdateFundingRate): void {}

export function handleUpdatePnl(event: UpdatePnl): void {}

export function handleUpdatePosition(event: UpdatePosition): void {}