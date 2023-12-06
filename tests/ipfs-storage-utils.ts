import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  MusicReleasedForCampaign,
  MusicReleasedWithoutCampaign
} from "../generated/IPFSStorage/IPFSStorage"

export function createMusicReleasedForCampaignEvent(
  artist: Address,
  musicTitle: string,
  musicIPFSHash: string
): MusicReleasedForCampaign {
  let musicReleasedForCampaignEvent = changetype<MusicReleasedForCampaign>(
    newMockEvent()
  )

  musicReleasedForCampaignEvent.parameters = new Array()

  musicReleasedForCampaignEvent.parameters.push(
    new ethereum.EventParam("artist", ethereum.Value.fromAddress(artist))
  )
  musicReleasedForCampaignEvent.parameters.push(
    new ethereum.EventParam("musicTitle", ethereum.Value.fromString(musicTitle))
  )
  musicReleasedForCampaignEvent.parameters.push(
    new ethereum.EventParam(
      "musicIPFSHash",
      ethereum.Value.fromString(musicIPFSHash)
    )
  )

  return musicReleasedForCampaignEvent
}

export function createMusicReleasedWithoutCampaignEvent(
  artist: Address,
  musicTitle: string,
  musicIPFSHash: string
): MusicReleasedWithoutCampaign {
  let musicReleasedWithoutCampaignEvent = changetype<
    MusicReleasedWithoutCampaign
  >(newMockEvent())

  musicReleasedWithoutCampaignEvent.parameters = new Array()

  musicReleasedWithoutCampaignEvent.parameters.push(
    new ethereum.EventParam("artist", ethereum.Value.fromAddress(artist))
  )
  musicReleasedWithoutCampaignEvent.parameters.push(
    new ethereum.EventParam("musicTitle", ethereum.Value.fromString(musicTitle))
  )
  musicReleasedWithoutCampaignEvent.parameters.push(
    new ethereum.EventParam(
      "musicIPFSHash",
      ethereum.Value.fromString(musicIPFSHash)
    )
  )

  return musicReleasedWithoutCampaignEvent
}
