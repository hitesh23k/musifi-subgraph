import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { MusicReleasedForCampaign } from "../generated/schema"
import { MusicReleasedForCampaign as MusicReleasedForCampaignEvent } from "../generated/IPFSStorage/IPFSStorage"
import { handleMusicReleasedForCampaign } from "../src/ipfs-storage"
import { createMusicReleasedForCampaignEvent } from "./ipfs-storage-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let artist = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let musicTitle = "Example string value"
    let musicIPFSHash = "Example string value"
    let newMusicReleasedForCampaignEvent = createMusicReleasedForCampaignEvent(
      artist,
      musicTitle,
      musicIPFSHash
    )
    handleMusicReleasedForCampaign(newMusicReleasedForCampaignEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MusicReleasedForCampaign created and stored", () => {
    assert.entityCount("MusicReleasedForCampaign", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MusicReleasedForCampaign",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "artist",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MusicReleasedForCampaign",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "musicTitle",
      "Example string value"
    )
    assert.fieldEquals(
      "MusicReleasedForCampaign",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "musicIPFSHash",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
