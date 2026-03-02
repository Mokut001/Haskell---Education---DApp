{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}
module ScholarsGate.Validator where
import Plutus.V2.Ledger.Api
import Plutus.V2.Ledger.Contexts (txSignedBy)
import PlutusTx.Prelude
import qualified PlutusTx
import ScholarsGate.Types

{-# INLINABLE mkScholarshipValidator #-}
mkScholarshipValidator :: ScholarshipDatum -> () -> ScriptContext -> Bool
mkScholarshipValidator dat _ ctx = 
    traceIfFalse "University verification signature missing" 
    (txSignedBy (scriptContextTxInfo ctx) (univPkh dat))

validator :: ScholarshipDatum -> Validator
validator dat = mkValidatorScript 
    ($$(PlutusTx.compile [|| mkScholarshipValidator ||]) `PlutusTx.applyCode` PlutusTx.liftCode dat)