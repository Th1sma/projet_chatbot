var eth;    // ethereum
var btc;    // bitcoin
var xrp;    // Ripple
var binance;    //binance
var polka;   // polkadot
var card;    // cardano

// -------------- Request for Ethereum -------------- //
fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(res => res.json())
    .then(data => eth = (data["ethereum"].usd))

// -------------- Request for Bitcoin -------------- //
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(res => res.json())
    .then(data => btc = (data["bitcoin"].usd))

// -------------- Request for Ripple -------------- //
fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd')
    .then(res => res.json())
    .then(data => xrp = (data["ripple"].usd))

// -------------- Request for Binance -------------- //
fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
    .then(res => res.json())
    .then(data => binance = (data["binancecoin"].usd))

// -------------- Request for Cardano -------------- //
fetch('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd')
    .then(res => res.json())
    .then(data => card = (data["cardano"].usd))

    // -------------- Request for polkadot -------------- //
fetch('https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd')
    .then(res => res.json())
    .then(data => polka = (data["polkadot"].usd))

    

function getBotResponse(input) {

    let name;
    let inputText = input.toLowerCase();
    let inputName = inputText;

    // discussion 
    if (inputText == "hello" || inputText == "hey") {

        return "Hello human, Nice to meet you !";

    }else if (inputText == "how are you ?") {
 
        return "I'm always happy, and you ?";
    
    }else if (inputText == "fine" || inputText == "very good" || inputText == "fine" || inputText == "not well") {
 
        return "Ok bro, how can i be help you ?";

    } else if (inputText == "gus help me" || inputText == "help me") {

        return "Yes of course ! <br> I can give you some information of cryptocurrency. <br> Write : <b> \"list\" </b> for the list of cryptocurrency.";

    } else if (inputText == "list") {

        return "Here is the list of cryptocurrency on which I can inform you :<b> bitcoin, binance-coin, cardano, ethereum, polkadot, xrp(ripple)."
      
    }else if(inputText == "ethereum"){      // price of ethereum

        return "<b>Ethereum : </b>" + eth + " $";

    }else if(inputText == "bitcoin"){       // price of Bitcoin

        return "<b>Bitcoin :</b> " + btc + " $";
    
    }else if(inputText == "xrp" || inputText == "ripple"){      //price of Ripple

        return "<b>Ripple : </b>" + xrp + " $";
    
    }else if(inputText == "binance" || inputText == "binance coin"){        //price of binance coin

        return "<b>Binance Coin : </b>" + binance + " $";

    }else if(inputText == "cardano"){        //price of cardano

        return "<b>Cardano : </b>" + card + " $";

    }else if(inputText == "polkadot"){        //price of polkadot

        return "<b>Polkadot : </b>" + polka + " $";

    }else{      // if, input no accepted

        return "sorry, i don't understand... <br> If you don't know what to say, check my documentation.";
    }

}
 
    