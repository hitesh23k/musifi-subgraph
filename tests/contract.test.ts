import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { CampaignApproved as CampaignApprovedEvent } from "../generated/Contract/Contract"
import { handleCampaignApproved } from "../src/funding-fans"
import { createCampaignApprovedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let campaignHash = Bytes.fromI32(1234567890)
    let newCampaignApprovedEvent = createCampaignApprovedEvent(campaignHash)
    handleCampaignApproved(newCampaignApprovedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CampaignApproved created and stored", () => {
    assert.entityCount("CampaignApproved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CampaignApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "campaignHash",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
