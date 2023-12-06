import {
  CampaignApproved as CampaignApprovedEvent,
  CampaignBlocked as CampaignBlockedEvent,
  CampaignCreated as CampaignCreatedEvent,
  DonationReceived as DonationReceivedEvent,
  NFTMinted as NFTMintedEvent,
  ReleaseFundToArtist as ReleaseFundToArtistEvent
} from "../generated/Contract/Contract"
import {
  CampaignApproved,
  CampaignBlocked,
  CampaignCreated,
  DonationReceived,
  NFTMinted,
  ReleaseFundToArtist
} from "../generated/schema"

export function handleCampaignApproved(event: CampaignApprovedEvent): void {
  let entity = new CampaignApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignHash = event.params.campaignHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignBlocked(event: CampaignBlockedEvent): void {
  let entity = new CampaignBlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignHash = event.params.campaignHash
  entity.blockReason = event.params.blockReason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignCreated(event: CampaignCreatedEvent): void {
  let entity = new CampaignCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignHash = event.params.campaignHash
  entity.artist = event.params.artist
  entity.title = event.params.title
  entity.description = event.params.description
  entity.goalTitle = event.params.goalTitle
  entity.goals = event.params.goals
  entity.instagramHandle = event.params.instagramHandle
  entity.spotifyHandle = event.params.spotifyHandle
  entity.yourStory = event.params.yourStory
  entity.NFTPicture = event.params.NFTPicture
  entity.targetAmount = event.params.targetAmount
  entity.runningDurationInDays = event.params.runningDurationInDays

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonationReceived(event: DonationReceivedEvent): void {
  let entity = new DonationReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.donor = event.params.donor
  entity.donationHash = event.params.donationHash
  entity.campaignHash = event.params.campaignHash
  entity.targetAmount = event.params.targetAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTMinted(event: NFTMintedEvent): void {
  let entity = new NFTMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.NFTAddress = event.params.NFTAddress
  entity.campaignId = event.params.campaignId
  entity.tokenId = event.params.tokenId
  entity.edition = event.params.edition

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReleaseFundToArtist(
  event: ReleaseFundToArtistEvent
): void {
  let entity = new ReleaseFundToArtist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.releasedBy = event.params.releasedBy
  entity.amountReleased = event.params.amountReleased
  entity.campaignID = event.params.campaignID
  entity.artistWallet = event.params.artistWallet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
