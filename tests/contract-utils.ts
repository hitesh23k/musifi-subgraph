import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CampaignApproved,
  CampaignBlocked,
  CampaignCreated,
  DonationReceived,
  NFTMinted,
  ReleaseFundToArtist
} from "../generated/Contract/Contract"

export function createCampaignApprovedEvent(
  campaignHash: Bytes
): CampaignApproved {
  let campaignApprovedEvent = changetype<CampaignApproved>(newMockEvent())

  campaignApprovedEvent.parameters = new Array()

  campaignApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignHash",
      ethereum.Value.fromFixedBytes(campaignHash)
    )
  )

  return campaignApprovedEvent
}

export function createCampaignBlockedEvent(
  campaignHash: Bytes,
  blockReason: string
): CampaignBlocked {
  let campaignBlockedEvent = changetype<CampaignBlocked>(newMockEvent())

  campaignBlockedEvent.parameters = new Array()

  campaignBlockedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignHash",
      ethereum.Value.fromFixedBytes(campaignHash)
    )
  )
  campaignBlockedEvent.parameters.push(
    new ethereum.EventParam(
      "blockReason",
      ethereum.Value.fromString(blockReason)
    )
  )

  return campaignBlockedEvent
}

export function createCampaignCreatedEvent(
  campaignHash: Bytes,
  artist: Address,
  title: string,
  description: string,
  goalTitle: string,
  goals: string,
  instagramHandle: string,
  spotifyHandle: string,
  yourStory: string,
  NFTPicture: string,
  targetAmount: BigInt,
  runningDurationInDays: BigInt
): CampaignCreated {
  let campaignCreatedEvent = changetype<CampaignCreated>(newMockEvent())

  campaignCreatedEvent.parameters = new Array()

  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignHash",
      ethereum.Value.fromFixedBytes(campaignHash)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("artist", ethereum.Value.fromAddress(artist))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("goalTitle", ethereum.Value.fromString(goalTitle))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("goals", ethereum.Value.fromString(goals))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "instagramHandle",
      ethereum.Value.fromString(instagramHandle)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "spotifyHandle",
      ethereum.Value.fromString(spotifyHandle)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("yourStory", ethereum.Value.fromString(yourStory))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("NFTPicture", ethereum.Value.fromString(NFTPicture))
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "targetAmount",
      ethereum.Value.fromUnsignedBigInt(targetAmount)
    )
  )
  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "runningDurationInDays",
      ethereum.Value.fromUnsignedBigInt(runningDurationInDays)
    )
  )

  return campaignCreatedEvent
}

export function createDonationReceivedEvent(
  donor: Address,
  donationHash: Bytes,
  campaignHash: Bytes,
  targetAmount: BigInt
): DonationReceived {
  let donationReceivedEvent = changetype<DonationReceived>(newMockEvent())

  donationReceivedEvent.parameters = new Array()

  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "donationHash",
      ethereum.Value.fromFixedBytes(donationHash)
    )
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignHash",
      ethereum.Value.fromFixedBytes(campaignHash)
    )
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "targetAmount",
      ethereum.Value.fromUnsignedBigInt(targetAmount)
    )
  )

  return donationReceivedEvent
}

export function createNFTMintedEvent(
  user: Address,
  NFTAddress: Address,
  campaignId: Bytes,
  tokenId: BigInt,
  edition: BigInt
): NFTMinted {
  let nftMintedEvent = changetype<NFTMinted>(newMockEvent())

  nftMintedEvent.parameters = new Array()

  nftMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "NFTAddress",
      ethereum.Value.fromAddress(NFTAddress)
    )
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromFixedBytes(campaignId)
    )
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "edition",
      ethereum.Value.fromUnsignedBigInt(edition)
    )
  )

  return nftMintedEvent
}

export function createReleaseFundToArtistEvent(
  token: Address,
  releasedBy: Address,
  amountReleased: BigInt,
  campaignID: Bytes,
  artistWallet: Address
): ReleaseFundToArtist {
  let releaseFundToArtistEvent = changetype<ReleaseFundToArtist>(newMockEvent())

  releaseFundToArtistEvent.parameters = new Array()

  releaseFundToArtistEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  releaseFundToArtistEvent.parameters.push(
    new ethereum.EventParam(
      "releasedBy",
      ethereum.Value.fromAddress(releasedBy)
    )
  )
  releaseFundToArtistEvent.parameters.push(
    new ethereum.EventParam(
      "amountReleased",
      ethereum.Value.fromUnsignedBigInt(amountReleased)
    )
  )
  releaseFundToArtistEvent.parameters.push(
    new ethereum.EventParam(
      "campaignID",
      ethereum.Value.fromFixedBytes(campaignID)
    )
  )
  releaseFundToArtistEvent.parameters.push(
    new ethereum.EventParam(
      "artistWallet",
      ethereum.Value.fromAddress(artistWallet)
    )
  )

  return releaseFundToArtistEvent
}
