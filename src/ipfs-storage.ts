import {
  MusicReleasedForCampaign as MusicReleasedForCampaignEvent,
  MusicReleasedWithoutCampaign as MusicReleasedWithoutCampaignEvent
} from "../generated/IPFSStorage/IPFSStorage"
import {
  MusicReleasedForCampaign,
  MusicReleasedWithoutCampaign
} from "../generated/schema"

export function handleMusicReleasedForCampaign(
  event: MusicReleasedForCampaignEvent
): void {
  let entity = new MusicReleasedForCampaign(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.artist = event.params.artist
  entity.musicTitle = event.params.musicTitle
  entity.musicIPFSHash = event.params.musicIPFSHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMusicReleasedWithoutCampaign(
  event: MusicReleasedWithoutCampaignEvent
): void {
  let entity = new MusicReleasedWithoutCampaign(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.artist = event.params.artist
  entity.musicTitle = event.params.musicTitle
  entity.musicIPFSHash = event.params.musicIPFSHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
