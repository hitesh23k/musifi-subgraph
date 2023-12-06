import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ProfileUpdated } from "../generated/schema"
import { ProfileUpdated as ProfileUpdatedEvent } from "../generated/UserProfile/UserProfile"
import { handleProfileUpdated } from "../src/user-profile"
import { createProfileUpdatedEvent } from "./user-profile-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let name = "Example string value"
    let profilePicHash = "Example string value"
    let newProfileUpdatedEvent = createProfileUpdatedEvent(
      user,
      name,
      profilePicHash
    )
    handleProfileUpdated(newProfileUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ProfileUpdated created and stored", () => {
    assert.entityCount("ProfileUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ProfileUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ProfileUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "ProfileUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "profilePicHash",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
