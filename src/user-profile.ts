import { ProfileUpdated as ProfileUpdatedEvent } from "../generated/UserProfile/UserProfile"
import { ProfileUpdated } from "../generated/schema"

export function handleProfileUpdated(event: ProfileUpdatedEvent): void {
  let entity = new ProfileUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.name = event.params.name
  entity.profilePicHash = event.params.profilePicHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
