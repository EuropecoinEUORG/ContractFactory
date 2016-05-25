// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"key_","type":"bytes32"}],"name":"getOrganisation","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"createOrganisation","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"organisations","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"upgradeOrganisation","outputs":[],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"organisation","type":"address"},{"indexed":false,"name":"now","type":"uint256"}],"name":"OrganisationCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"organisation","type":"address"},{"indexed":false,"name":"now","type":"uint256"}],"name":"OrganisationUpgraded","type":"event"}],
    binary: "6060604052610b1e806100126000396000f3606060405260e060020a600035046304291e72811461003c5780636b46fdc014610062578063cd6d718a14610103578063e300753f14610124575b005b600435600090815260208190526040902054600160a060020a03165b6060908152602090f35b61003a6004356000606061049f806101e0833901809050604051809103906000f09050806000600050600084815260200190815260200160002060006101000a815481600160a060020a03021916908302179055507f86341a03fa03881729a1ff17588d52a053c7549a3a2d60c0bb208cbae8433a5981426040518083600160a060020a031681526020018281526020019250505060405180910390a15050565b610058600435600060208190529081526040902054600160a060020a031681565b61003a600435600081815260208190526040812054600160a060020a0316908190606061049f8061067f833901809050604051809103906000f09050806000600050600086815260200190815260200160002060006101000a815481600160a060020a03021916908302179055507fd976b1057253538b70241bc2cef45b17c489f2517484ffbfcd411339ef7a030781426040518083600160a060020a031681526020018281526020019250505060405180910390a15050505056606060405261048d806100126000396000f3606060405260e060020a60003504639f2b05d4811461003c578063b72a707414610104578063c7f758a8146101f1578063e210f4b514610292575b005b60408051602060248035600481810135601f810185900485028601850190965285855261003a95813595919460449492939092019181908401838280828437509496505050505050508060006000508381548110156100025781805260020260008051602061046d8339815191520190506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061043d57805160ff19168380011785555b506103fd9291506101dd565b6040805160206004803580820135601f810184900484028501840190955284845261003a949193602493909291840191908190840183828082843750949650505050505050604080518082019091528181526000602082018190528054909190829081908110156100025780805260008051602061046d8339815191529150506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038d57805160ff19168380011785555b5061033c9291505b808211156103bd57600081556001016101dd565b6102c76004356040805160208101909152600080825280548190819085908110156100025790805260020260008051602061046d8339815191520181506040805160018381015484546020600293821615610100026000190190911692909204601f810183900483028401830190945283835293945084939284918301828280156103ec5780601f106103c1576101008083540402835291602001916103ec565b61003a6004353460006000508281548110156100025781805260020260008051602061046d8339815191520190506001015550565b60405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b5050602091820151600191909101556040805160ff84168152429281019290925280517fcf9af864fe793f8ab30e13cdc3475afd6ccb7896eef43ce2aaecaa97711310ad9281900390910190a15050565b828001600101855582156101d5579182015b828111156101d557825182600050559160200191906001019061039f565b5090565b820191906000526020600020905b8154815290600101906020018083116103cf57829003601f168201915b505050505091509250925050915091565b50506040805183815242602082015281517fd0d48d54a7ebcfcfd76018524c8d822767ac6f81ca7171b01511c2b53b35971a929181900390910190a15050565b828001600101855582156100f8579182015b828111156100f857825182600050559160200191906001019061044f56290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563606060405261048d806100126000396000f3606060405260e060020a60003504639f2b05d4811461003c578063b72a707414610104578063c7f758a8146101f1578063e210f4b514610292575b005b60408051602060248035600481810135601f810185900485028601850190965285855261003a95813595919460449492939092019181908401838280828437509496505050505050508060006000508381548110156100025781805260020260008051602061046d8339815191520190506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061043d57805160ff19168380011785555b506103fd9291506101dd565b6040805160206004803580820135601f810184900484028501840190955284845261003a949193602493909291840191908190840183828082843750949650505050505050604080518082019091528181526000602082018190528054909190829081908110156100025780805260008051602061046d8339815191529150506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038d57805160ff19168380011785555b5061033c9291505b808211156103bd57600081556001016101dd565b6102c76004356040805160208101909152600080825280548190819085908110156100025790805260020260008051602061046d8339815191520181506040805160018381015484546020600293821615610100026000190190911692909204601f810183900483028401830190945283835293945084939284918301828280156103ec5780601f106103c1576101008083540402835291602001916103ec565b61003a6004353460006000508281548110156100025781805260020260008051602061046d8339815191520190506001015550565b60405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b5050602091820151600191909101556040805160ff84168152429281019290925280517fcf9af864fe793f8ab30e13cdc3475afd6ccb7896eef43ce2aaecaa97711310ad9281900390910190a15050565b828001600101855582156101d5579182015b828111156101d557825182600050559160200191906001019061039f565b5090565b820191906000526020600020905b8154815290600101906020018083116103cf57829003601f168201915b505050505091509250925050915091565b50506040805183815242602082015281517fd0d48d54a7ebcfcfd76018524c8d822767ac6f81ca7171b01511c2b53b35971a929181900390910190a15050565b828001600101855582156100f8579182015b828111156100f857825182600050559160200191906001019061044f56290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563",
    unlinked_binary: "6060604052610b1e806100126000396000f3606060405260e060020a600035046304291e72811461003c5780636b46fdc014610062578063cd6d718a14610103578063e300753f14610124575b005b600435600090815260208190526040902054600160a060020a03165b6060908152602090f35b61003a6004356000606061049f806101e0833901809050604051809103906000f09050806000600050600084815260200190815260200160002060006101000a815481600160a060020a03021916908302179055507f86341a03fa03881729a1ff17588d52a053c7549a3a2d60c0bb208cbae8433a5981426040518083600160a060020a031681526020018281526020019250505060405180910390a15050565b610058600435600060208190529081526040902054600160a060020a031681565b61003a600435600081815260208190526040812054600160a060020a0316908190606061049f8061067f833901809050604051809103906000f09050806000600050600086815260200190815260200160002060006101000a815481600160a060020a03021916908302179055507fd976b1057253538b70241bc2cef45b17c489f2517484ffbfcd411339ef7a030781426040518083600160a060020a031681526020018281526020019250505060405180910390a15050505056606060405261048d806100126000396000f3606060405260e060020a60003504639f2b05d4811461003c578063b72a707414610104578063c7f758a8146101f1578063e210f4b514610292575b005b60408051602060248035600481810135601f810185900485028601850190965285855261003a95813595919460449492939092019181908401838280828437509496505050505050508060006000508381548110156100025781805260020260008051602061046d8339815191520190506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061043d57805160ff19168380011785555b506103fd9291506101dd565b6040805160206004803580820135601f810184900484028501840190955284845261003a949193602493909291840191908190840183828082843750949650505050505050604080518082019091528181526000602082018190528054909190829081908110156100025780805260008051602061046d8339815191529150506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038d57805160ff19168380011785555b5061033c9291505b808211156103bd57600081556001016101dd565b6102c76004356040805160208101909152600080825280548190819085908110156100025790805260020260008051602061046d8339815191520181506040805160018381015484546020600293821615610100026000190190911692909204601f810183900483028401830190945283835293945084939284918301828280156103ec5780601f106103c1576101008083540402835291602001916103ec565b61003a6004353460006000508281548110156100025781805260020260008051602061046d8339815191520190506001015550565b60405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b5050602091820151600191909101556040805160ff84168152429281019290925280517fcf9af864fe793f8ab30e13cdc3475afd6ccb7896eef43ce2aaecaa97711310ad9281900390910190a15050565b828001600101855582156101d5579182015b828111156101d557825182600050559160200191906001019061039f565b5090565b820191906000526020600020905b8154815290600101906020018083116103cf57829003601f168201915b505050505091509250925050915091565b50506040805183815242602082015281517fd0d48d54a7ebcfcfd76018524c8d822767ac6f81ca7171b01511c2b53b35971a929181900390910190a15050565b828001600101855582156100f8579182015b828111156100f857825182600050559160200191906001019061044f56290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563606060405261048d806100126000396000f3606060405260e060020a60003504639f2b05d4811461003c578063b72a707414610104578063c7f758a8146101f1578063e210f4b514610292575b005b60408051602060248035600481810135601f810185900485028601850190965285855261003a95813595919460449492939092019181908401838280828437509496505050505050508060006000508381548110156100025781805260020260008051602061046d8339815191520190506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061043d57805160ff19168380011785555b506103fd9291506101dd565b6040805160206004803580820135601f810184900484028501840190955284845261003a949193602493909291840191908190840183828082843750949650505050505050604080518082019091528181526000602082018190528054909190829081908110156100025780805260008051602061046d8339815191529150506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061038d57805160ff19168380011785555b5061033c9291505b808211156103bd57600081556001016101dd565b6102c76004356040805160208101909152600080825280548190819085908110156100025790805260020260008051602061046d8339815191520181506040805160018381015484546020600293821615610100026000190190911692909204601f810183900483028401830190945283835293945084939284918301828280156103ec5780601f106103c1576101008083540402835291602001916103ec565b61003a6004353460006000508281548110156100025781805260020260008051602061046d8339815191520190506001015550565b60405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b5050602091820151600191909101556040805160ff84168152429281019290925280517fcf9af864fe793f8ab30e13cdc3475afd6ccb7896eef43ce2aaecaa97711310ad9281900390910190a15050565b828001600101855582156101d5579182015b828111156101d557825182600050559160200191906001019061039f565b5090565b820191906000526020600020905b8154815290600101906020018083116103cf57829003601f168201915b505050505091509250925050915091565b50506040805183815242602082015281517fd0d48d54a7ebcfcfd76018524c8d822767ac6f81ca7171b01511c2b53b35971a929181900390910190a15050565b828001600101855582156100f8579182015b828111156100f857825182600050559160200191906001019061044f56290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563",
    address: "",
    generated_with: "2.0.9",
    contract_name: "Parent"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Parent = Contract;
  }

})();
