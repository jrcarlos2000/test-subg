import { BigInt } from "@graphprotocol/graph-ts"
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
import { vaultEntity } from "../generated/schema"

export function handleBuyUSDG(event: BuyUSDG): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = vaultEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new vaultEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.account = event.params.account
  entity.token = event.params.token

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
  // - contract.BASIS_POINTS_DIVISOR(...)
  // - contract.FUNDING_RATE_PRECISION(...)
  // - contract.MAX_FEE_BASIS_POINTS(...)
  // - contract.MAX_FUNDING_RATE_FACTOR(...)
  // - contract.MAX_LIQUIDATION_FEE_USD(...)
  // - contract.MIN_FUNDING_RATE_INTERVAL(...)
  // - contract.MIN_LEVERAGE(...)
  // - contract.PRICE_PRECISION(...)
  // - contract.USDG_DECIMALS(...)
  // - contract.adjustForDecimals(...)
  // - contract.allWhitelistedTokens(...)
  // - contract.allWhitelistedTokensLength(...)
  // - contract.approvedRouters(...)
  // - contract.bufferAmounts(...)
  // - contract.buyUSDG(...)
  // - contract.cumulativeFundingRates(...)
  // - contract.decreasePosition(...)
  // - contract.errorController(...)
  // - contract.errors(...)
  // - contract.feeReserves(...)
  // - contract.fundingInterval(...)
  // - contract.fundingRateFactor(...)
  // - contract.getDelta(...)
  // - contract.getEntryFundingRate(...)
  // - contract.getFeeBasisPoints(...)
  // - contract.getFundingFee(...)
  // - contract.getGlobalShortDelta(...)
  // - contract.getMaxPrice(...)
  // - contract.getMinPrice(...)
  // - contract.getNextAveragePrice(...)
  // - contract.getNextFundingRate(...)
  // - contract.getNextGlobalShortAveragePrice(...)
  // - contract.getPosition(...)
  // - contract.getPositionDelta(...)
  // - contract.getPositionFee(...)
  // - contract.getPositionKey(...)
  // - contract.getPositionLeverage(...)
  // - contract.getRedemptionAmount(...)
  // - contract.getRedemptionCollateral(...)
  // - contract.getRedemptionCollateralUsd(...)
  // - contract.getTargetUsdgAmount(...)
  // - contract.getUtilisation(...)
  // - contract.globalShortAveragePrices(...)
  // - contract.globalShortSizes(...)
  // - contract.gov(...)
  // - contract.guaranteedUsd(...)
  // - contract.hasDynamicFees(...)
  // - contract.inManagerMode(...)
  // - contract.inPrivateLiquidationMode(...)
  // - contract.includeAmmPrice(...)
  // - contract.isInitialized(...)
  // - contract.isLeverageEnabled(...)
  // - contract.isLiquidator(...)
  // - contract.isManager(...)
  // - contract.isSwapEnabled(...)
  // - contract.lastFundingTimes(...)
  // - contract.liquidationFeeUsd(...)
  // - contract.marginFeeBasisPoints(...)
  // - contract.maxGasPrice(...)
  // - contract.maxGlobalShortSizes(...)
  // - contract.maxLeverage(...)
  // - contract.maxUsdgAmounts(...)
  // - contract.minProfitBasisPoints(...)
  // - contract.minProfitTime(...)
  // - contract.mintBurnFeeBasisPoints(...)
  // - contract.poolAmounts(...)
  // - contract.positions(...)
  // - contract.priceFeed(...)
  // - contract.reservedAmounts(...)
  // - contract.router(...)
  // - contract.sellUSDG(...)
  // - contract.shortableTokens(...)
  // - contract.stableFundingRateFactor(...)
  // - contract.stableSwapFeeBasisPoints(...)
  // - contract.stableTaxBasisPoints(...)
  // - contract.stableTokens(...)
  // - contract.swap(...)
  // - contract.swapFeeBasisPoints(...)
  // - contract.taxBasisPoints(...)
  // - contract.tokenBalances(...)
  // - contract.tokenDecimals(...)
  // - contract.tokenToUsdMin(...)
  // - contract.tokenWeights(...)
  // - contract.totalTokenWeights(...)
  // - contract.usdToToken(...)
  // - contract.usdToTokenMax(...)
  // - contract.usdToTokenMin(...)
  // - contract.usdg(...)
  // - contract.usdgAmounts(...)
  // - contract.useSwapPricing(...)
  // - contract.validateLiquidation(...)
  // - contract.vaultUtils(...)
  // - contract.whitelistedTokenCount(...)
  // - contract.whitelistedTokens(...)
  // - contract.withdrawFees(...)
}

export function handleClosePosition(event: ClosePosition): void {}

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

export function handleIncreasePosition(event: IncreasePosition): void {}

export function handleIncreaseReservedAmount(
  event: IncreaseReservedAmount
): void {}

export function handleIncreaseUsdgAmount(event: IncreaseUsdgAmount): void {}

export function handleLiquidatePosition(event: LiquidatePosition): void {}

export function handleSellUSDG(event: SellUSDG): void {}

export function handleSwap(event: Swap): void {}

export function handleUpdateFundingRate(event: UpdateFundingRate): void {}

export function handleUpdatePnl(event: UpdatePnl): void {}

export function handleUpdatePosition(event: UpdatePosition): void {}
