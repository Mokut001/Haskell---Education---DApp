{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE DeriveAnyClass      #-}
{-# LANGUAGE DeriveGeneric       #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
module ScholarsGate.Types where
import Plutus.V2.Ledger.Api
import PlutusTx.Prelude
import qualified PlutusTx
import GHC.Generics (Generic)

data ScholarshipDatum = ScholarshipDatum
    { saverPkh    :: PubKeyHash
    , univPkh     :: PubKeyHash
    , amountAda   :: Integer
    , milestone   :: BuiltinByteString
    } deriving (Show, Generic)

PlutusTx.makeIsDataIndexed ''ScholarshipDatum [('ScholarshipDatum, 0)]
PlutusTx.makeLift ''ScholarshipDatum