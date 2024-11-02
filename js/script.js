const flagUrls = {
  "AED": "https://flagpedia.net/data/flags/h80/ae.png", // Birlashgan Arab Amirliklari dirhami
  "AFN": "https://flagpedia.net/data/flags/h80/af.png", // Afg'oniston afg'onisi
  "ALL": "https://flagpedia.net/data/flags/h80/al.png", // Albaniya lek
  "AMD": "https://flagpedia.net/data/flags/h80/am.png", // Armaniston dram
  "ANG": "https://flagpedia.net/data/flags/h80/aw.png", // Aruba guldeni
  "AOA": "https://flagpedia.net/data/flags/h80/ao.png", // Angola kvanzas
  "ARS": "https://flagpedia.net/data/flags/h80/ar.png", // Argentina pesosi
  "AUD": "https://flagpedia.net/data/flags/h80/au.png", // Avstraliya dollari
  "AWG": "https://flagpedia.net/data/flags/h80/aw.png", // Aruba guldeni
  "AZN": "https://flagpedia.net/data/flags/h80/az.png", // Ozarbayjon manati
  "BAM": "https://flagpedia.net/data/flags/h80/ba.png", // Bosniya va Gersegovina konvertibil markasi
  "BBD": "https://flagpedia.net/data/flags/h80/bb.png", // Barbados dollari
  "BDT": "https://flagpedia.net/data/flags/h80/bd.png", // Bangladesh taka
  "BGN": "https://flagpedia.net/data/flags/h80/bg.png", // Bolgariya leva
  "BHD": "https://flagpedia.net/data/flags/h80/bh.png", // Birlashgan Arab Amirliklari dinori
  "BIF": "https://flagpedia.net/data/flags/h80/bi.png", // Burundi franki
  "BMD": "https://flagpedia.net/data/flags/h80/bm.png", // Bermuda dollari
  "BND": "https://flagpedia.net/data/flags/h80/bn.png", // Bruney dollari
  "BOB": "https://flagpedia.net/data/flags/h80/bo.png", // Boliviya boliviani
  "BRL": "https://flagpedia.net/data/flags/h80/br.png", // Braziliya reali
  "BSD": "https://flagpedia.net/data/flags/h80/bs.png", // Bahama dollari
  "BTN": "https://flagpedia.net/data/flags/h80/bt.png", // Butan ngultrumi
  "BWP": "https://flagpedia.net/data/flags/h80/bw.png", // Botsvana pula
  "BYN": "https://flagpedia.net/data/flags/h80/by.png", // Belarus rubli
  "BZD": "https://flagpedia.net/data/flags/h80/bz.png", // Beliz dollari
  "CAD": "https://flagpedia.net/data/flags/h80/ca.png", // Kanada dollari
  "CDF": "https://flagpedia.net/data/flags/h80/cd.png", // Kongo franki
  "CHF": "https://flagpedia.net/data/flags/h80/ch.png", // Shveytsariya franki
  "CLP": "https://flagpedia.net/data/flags/h80/cl.png", // Chili pesosi
  "CNY": "https://flagpedia.net/data/flags/h80/cn.png", // Xitoy yuani
  "COP": "https://flagpedia.net/data/flags/h80/co.png", // Kolumbiya pesosi
  "CRC": "https://flagpedia.net/data/flags/h80/cr.png", // Kostarika koloni
  "CUP": "https://flagpedia.net/data/flags/h80/cu.png", // Kuba pesosi
  "CVE": "https://flagpedia.net/data/flags/h80/cv.png", // Kap Verde eskudosu
  "CZK": "https://flagpedia.net/data/flags/h80/cz.png", // Chexiya kronasi
  "DKK": "https://flagpedia.net/data/flags/h80/dk.png", // Daniya kronasi
  "DOP": "https://flagpedia.net/data/flags/h80/do.png", // Dominikan pesosi
  "DZD": "https://flagpedia.net/data/flags/h80/dz.png", // Jazoir dinori
  "EGP": "https://flagpedia.net/data/flags/h80/eg.png", // Misr funti
  "ERN": "https://flagpedia.net/data/flags/h80/er.png", // Eritreya nakfas
  "ETB": "https://flagpedia.net/data/flags/h80/et.png", // Efiopiya birrasi
  "EUR": "https://static.cdnlogo.com/logos/e/84/european-union.svg", // Yevro
  "FJD": "https://flagpedia.net/data/flags/h80/fj.png", // Fiji dollari
  "FKP": "https://flagpedia.net/data/flags/h80/fk.png", // Falkland orollari funti
  "FOK": "https://flagpedia.net/data/flags/h80/fo.png", // Farer orollari kronga
  "GBP": "https://flagpedia.net/data/flags/h80/gb.png", // Britaniya funt sterlingi
  "GEL": "https://flagpedia.net/data/flags/h80/ge.png", // Gruziya lari
  "GHS": "https://flagpedia.net/data/flags/h80/gh.png", // Gana sedisi
  "GMD": "https://flagpedia.net/data/flags/h80/gm.png", // Gambia dalasi
  "GNF": "https://flagpedia.net/data/flags/h80/gn.png", // Gine franki
  "GTQ": "https://flagpedia.net/data/flags/h80/gt.png", // Gvatemala kettlasi
  "GYD": "https://flagpedia.net/data/flags/h80/gy.png", // G'yanadagi dollar
  "HKD": "https://flagpedia.net/data/flags/h80/hk.png", // Gonkong dollari
  "HNL": "https://flagpedia.net/data/flags/h80/hn.png", // Gonduras lempirasi
  "HRK": "https://flagpedia.net/data/flags/h80/hr.png", // Xorvatiya kunasi
  "HTG": "https://flagpedia.net/data/flags/h80/ht.png", // Gaiti guri
  "HUF": "https://flagpedia.net/data/flags/h80/hu.png", // Vengriya forinti
  "IDR": "https://flagpedia.net/data/flags/h80/id.png", // Indoneziya rupiyasi
  "ILS": "https://flagpedia.net/data/flags/h80/il.png", // Isroil shekeli
  "INR": "https://flagpedia.net/data/flags/h80/in.png", // Hind rupees
  "IQD": "https://flagpedia.net/data/flags/h80/iq.png", // Iroq dinori
  "IRR": "https://flagpedia.net/data/flags/h80/ir.png", // Eron riallari
  "ISK": "https://flagpedia.net/data/flags/h80/is.png", // Islandiya kronasi
  "JMD": "https://flagpedia.net/data/flags/h80/jm.png", // Yaman dollar
  "JPY": "https://flagpedia.net/data/flags/h80/jp.png", // Yaponiya iyenasi
  "KES": "https://flagpedia.net/data/flags/h80/ke.png", // Keniy shilingi
  "KGS": "https://flagpedia.net/data/flags/h80/kg.png", // Qirg'iziston somi
  "KHR": "https://flagpedia.net/data/flags/h80/kh.png", // Kambodja rieli
  "KPW": "https://flagpedia.net/data/flags/h80/kp.png", // Shimoliy Koreya voni
  "KRW": "https://flagpedia.net/data/flags/h80/kr.png", // Janubiy Koreya voni
  "KWD": "https://flagpedia.net/data/flags/h80/kw.png", // Kuvayt dinori
  "KYD": "https://flagpedia.net/data/flags/h80/ky.png", // Kayman orollari dollari
  "KZT": "https://flagpedia.net/data/flags/h80/kz.png", // Qozog'iston tengesi
  "LAK": "https://flagpedia.net/data/flags/h80/la.png", // Laosl shigi
  "LBP": "https://flagpedia.net/data/flags/h80/lb.png", // Livan funti
  "LKR": "https://flagpedia.net/data/flags/h80/lk.png", // Shri-Lanka rupees
  "LRD": "https://flagpedia.net/data/flags/h80/lr.png", // Liberiya dollari
  "LSL": "https://flagpedia.net/data/flags/h80/ls.png", // Lesoto lotisi
  "LYD": "https://flagpedia.net/data/flags/h80/ly.png", // Liviya dinori
  "MAD": "https://flagpedia.net/data/flags/h80/ma.png", // Marokash dirhami
  "MDL": "https://flagpedia.net/data/flags/h80/md.png", // Moldaviya leyi
  "MGA": "https://flagpedia.net/data/flags/h80/mg.png", // Madagaskar ariari
  "MKD": "https://flagpedia.net/data/flags/h80/mk.png", // Makedoniya dinori
  "MMK": "https://flagpedia.net/data/flags/h80/mm.png", // Myanma kyati
  "MNT": "https://flagpedia.net/data/flags/h80/mn.png", // Mongoliya tugrik
  "MOP": "https://flagpedia.net/data/flags/h80/mo.png", // Macao patakasi
  "MRU": "https://flagpedia.net/data/flags/h80/mr.png", // Mavritaniya o'zi
  "MUR": "https://flagpedia.net/data/flags/h80/mu.png", // Mauritsiya rupiyasi
  "MXN": "https://flagpedia.net/data/flags/h80/mx.png", // Meksika pesosi
  "MYR": "https://flagpedia.net/data/flags/h80/my.png", // Malayziya ringgiti
  "MZN": "https://flagpedia.net/data/flags/h80/mz.png", // Mozambik metikali
  "NAD": "https://flagpedia.net/data/flags/h80/na.png", // Namibiya dollari
  "NGN": "https://flagpedia.net/data/flags/h80/ng.png", // Nigeriya nairası
  "NIO": "https://flagpedia.net/data/flags/h80/ni.png", // Nikaragua kordobasi
  "NOK": "https://flagpedia.net/data/flags/h80/no.png", // Norvegiya kronasi
  "NPR": "https://flagpedia.net/data/flags/h80/np.png", // Nepali rupee
  "NZD": "https://flagpedia.net/data/flags/h80/nz.png", // Yangi Zelandiya dollari
  "OMR": "https://flagpedia.net/data/flags/h80/om.png", // Ummon riali
  "PEN": "https://flagpedia.net/data/flags/h80/pe.png", // Peruvian sol
  "PGK": "https://flagpedia.net/data/flags/h80/pg.png", // Papua-Yangi Gvineya kina
  "PHP": "https://flagpedia.net/data/flags/h80/ph.png", // Filippin pesosi
  "PKR": "https://flagpedia.net/data/flags/h80/pk.png", // Pokiston rupiyasi
  "PLN": "https://flagpedia.net/data/flags/h80/pl.png", // Polsha zlotysi
  "PYG": "https://flagpedia.net/data/flags/h80/py.png", // Paragvay guarani
  "QAR": "https://flagpedia.net/data/flags/h80/qa.png", // Qatar riali
  "RON": "https://flagpedia.net/data/flags/h80/ro.png", // Ruminiya leyi
  "RSD": "https://flagpedia.net/data/flags/h80/rs.png", // Serbiya dinori
  "RUB": "https://flagpedia.net/data/flags/h80/ru.png", // Rossiya rubli
  "RWF": "https://flagpedia.net/data/flags/h80/rw.png", // Ruanda franki
  "SAR": "https://flagpedia.net/data/flags/h80/sa.png", // Saudiya riali
  "SBD": "https://flagpedia.net/data/flags/h80/sb.png", // Solomon orollari dollari
  "SCR": "https://flagpedia.net/data/flags/h80/sc.png", // Seyshell orollari rupiyasi
  "SDG": "https://flagpedia.net/data/flags/h80/sd.png", // Sudan poundi
  "SEK": "https://flagpedia.net/data/flags/h80/se.png", // Shvetsiya kronasi
  "SGD": "https://flagpedia.net/data/flags/h80/sg.png", // Singapur dollari
  "SHP": "https://flagpedia.net/data/flags/h80/sh.png", // Saint Helena funti
  "SLL": "https://flagpedia.net/data/flags/h80/sl.png", // Syerra-Leone leoni
  "SOS": "https://flagpedia.net/data/flags/h80/so.png", // Somaliya shilingi
  "SRD": "https://flagpedia.net/data/flags/h80/sr.png", // Surinam dollar
  "SSP": "https://flagpedia.net/data/flags/h80/ss.png", // Janubiy Sudan funti
  "STD": "https://flagpedia.net/data/flags/h80/st.png", // Santo Tome va Prinsip dozi
  "SYP": "https://flagpedia.net/data/flags/h80/sy.png", // Suriya funti
  "SZL": "https://flagpedia.net/data/flags/h80/sz.png", // Svazilend lilangeni
  "THB": "https://flagpedia.net/data/flags/h80/th.png", // Tailand bat
  "TJS": "https://flagpedia.net/data/flags/h80/tj.png", // Tojikiston somoni
  "TMT": "https://flagpedia.net/data/flags/h80/tm.png", // Turkmenistan manati
  "TND": "https://flagpedia.net/data/flags/h80/tn.png", // Tunis dinori
  "TOP": "https://flagpedia.net/data/flags/h80/to.png", // Tonga pa'anga
  "TRY": "https://flagpedia.net/data/flags/h80/tr.png", // Turkiya lirasi
  "TTD": "https://flagpedia.net/data/flags/h80/tt.png", // Trinidad va Tobago dollari
  "TWD": "https://flagpedia.net/data/flags/h80/tw.png", // Tayvan yangi dollari
  "TZS": "https://flagpedia.net/data/flags/h80/tz.png", // Tansaniya shilingi
  "UAH": "https://flagpedia.net/data/flags/h80/ua.png", // Ukraina grivnasi
  "UGX": "https://flagpedia.net/data/flags/h80/ug.png", // Uganda shilingi
  "USD": "https://flagpedia.net/data/flags/h80/us.png", // AQSH dollari
  "UYU": "https://flagpedia.net/data/flags/h80/uy.png", // Urugvay pesosi
  "UZS": "https://flagpedia.net/data/flags/h80/uz.png", // O'zbekiston so'mi
  "VES": "https://flagpedia.net/data/flags/h80/ve.png", // Venesuela bolivari
  "VND": "https://flagpedia.net/data/flags/h80/vn.png", // Vetnam dongi
  "VUV": "https://flagpedia.net/data/flags/h80/vu.png", // Vanuatu vatu
  "WST": "https://flagpedia.net/data/flags/h80/ws.png", // Samoa tala
  "XAF": "https://flagpedia.net/data/flags/h80/xaf.png", // Markaziy Afrika franki
  "XCD": "https://flagpedia.net/data/flags/h80/xcd.png", // Sharqiy Karib dollari
  "XOF": "https://flagpedia.net/data/flags/h80/xof.png", // G'arbiy Afrika franki
  "XPF": "https://flagpedia.net/data/flags/h80/xpf.png", // Fransuz Polineziyasining franki
  "XDR": "https://thumb.ac-illust.com/f4/f4d2ac07261436d1bc4c655b47801b20_t.jpeg", // Maxsus chizilgan huquqlar
  "YER": "https://flagpedia.net/data/flags/h80/ye.png", // Yaman riallari
  "ZAR": "https://flagpedia.net/data/flags/h80/za.png", // Janubiy Afrika rand
  "ZMW": "https://flagpedia.net/data/flags/h80/zm.png", // Zambiya kvachasi
  "ZWL": "https://flagpedia.net/data/flags/h80/zw.png", // Zimbabve dollari
  "JOD": "https://flagpedia.net/data/flags/h80/jo.png", // Iordaniya dinori
};



async function FetchCurrency() {
  const data = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/").then((res) => res.json()).then((data) => {
    return data
  })

  await data.map((card) => {
    const cardElement = `<div class="all_currency_item">
          <div class="all_currency_item_image">
            <img alt=${card.Ccy} src=${flagUrls[card.Ccy]} />
          </div>
          <div class="all_currency_item_text">
            <h1>
              ${card.Ccy}
              <p>&nbsp;= ${card.Rate} so'm</p>
            </h1>
            <h4 style=${card.Diff > 0 ? "color:green;" : "color:red"}>${card.Diff} so'm</h4>
          </div>
          <div class="all_currency_item_icon">
            <img
              src="${card.Diff > 0 ? `https://cbu.uz/bitrix/templates/main/img/svg/icon__chart_up.svg` : card.Diff < 0 ? `https://cbu.uz/bitrix/templates/main/img/svg/icon__chart_down.svg` : card.Diff == 0 ? `https://cbu.uz/bitrix/templates/main/img/svg/icon__chart_zero.svg` : ""}"
              alt=""
            />
          </div>
        </div>`;

    document.querySelector(".all_currency").innerHTML += cardElement;
  })

}
FetchCurrency();


document.querySelector("#from").addEventListener("keyup", async (e) => {
  const data = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/").then((res) => res.json()).then((data) => {
    return data
  })
  let FromInput = Number(e.target.value);
  let toInput = document.querySelector("#to");
  let Fromkurs = document.querySelector("#FromSelect").value;
  let toKurs = document.querySelector("#toSelect").value;
  data.map((item) => {
    if (item.Ccy == "USD") {
      if (Fromkurs == "UZS" && toKurs == "USD") {
        toInput.value = Math.round(FromInput / Number(item.Rate));
      } else if (Fromkurs == "USD" && toKurs == "UZS") {
        toInput.value = Math.round(FromInput * Number(item.Rate));
      } else if (Fromkurs == "USD" && toKurs == "USD") {
        toInput.value = FromInput;
      }
    }
    if (item.Ccy == "RUB") {
      if (Fromkurs == "UZS" && toKurs == "RUB") {
        toInput.value = Math.round(FromInput / Number(item.Rate));
      } else if (Fromkurs == "RUB" && toKurs == "UZS") {
        toInput.value = Math.round(FromInput * Number(item.Rate));
      } else if (Fromkurs == "RUB" && toKurs == "RUB") {
        toInput.value = FromInput;
      }
    }
    if (Fromkurs == "UZS" && toKurs == "UZS") {
      toInput.value = FromInput;
    }
  })
  if (Fromkurs == "USD" && toKurs == "RUB") {
    let usd = data.filter(item => item.Ccy == "USD");
    let rub = data.filter(item => item.Ccy == "RUB");
    let toUZS = FromInput * Number(usd[0].Rate);
    let toRUB = toUZS / Number(rub[0].Rate)
    toInput.value = Math.round(toRUB);
  }

})
document.querySelector("#FromSelect").addEventListener("change", async () => {
  const data = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/").then((res) => res.json()).then((data) => {
    return data
  })
  let FromInput = Number(document.querySelector("#from").value);
  let toInput = document.querySelector("#to");
  let Fromkurs = document.querySelector("#FromSelect").value;
  let toKurs = document.querySelector("#toSelect").value;
  data.map((item) => {
    if (item.Ccy == "USD") {
      if (Fromkurs == "UZS" && toKurs == "USD") {
        toInput.value = Math.round(FromInput / Number(item.Rate));
      } else if (Fromkurs == "USD" && toKurs == "UZS") {
        toInput.value = Math.round(FromInput * Number(item.Rate));
      } else if (Fromkurs == "USD" && toKurs == "USD") {
        toInput.value = FromInput;
      }
    }
    if (item.Ccy == "RUB") {
      if (Fromkurs == "UZS" && toKurs == "RUB") {
        toInput.value = Math.round(FromInput / Number(item.Rate));
      } else if (Fromkurs == "RUB" && toKurs == "UZS") {
        toInput.value = Math.round(FromInput * Number(item.Rate));
      } else if (Fromkurs == "RUB" && toKurs == "RUB") {
        toInput.value = FromInput;
      }
    }
    if (Fromkurs == "UZS" && toKurs == "UZS") {
      toInput.value = FromInput;
    }
  })
  if (Fromkurs == "USD" && toKurs == "RUB") {
    let usd = data.filter(item => item.Ccy == "USD");
    let rub = data.filter(item => item.Ccy == "RUB");
    let toUZS = FromInput * Number(usd[0].Rate);
    let toRUB = toUZS / Number(rub[0].Rate)
    toInput.value = Math.round(toRUB);
  }
})
document.querySelector("#toSelect").addEventListener("change", async () => {
  const data = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/").then((res) => res.json()).then((data) => {
    return data
  })
  let FromInput = Number(document.querySelector("#from").value);
  let toInput = document.querySelector("#to");
  let Fromkurs = document.querySelector("#FromSelect").value;
  let toKurs = document.querySelector("#toSelect").value;
  data.map((item) => {
    if (item.Ccy == "USD") {
      if (Fromkurs == "UZS" && toKurs == "USD") {
        toInput.value = Math.round(FromInput / Number(item.Rate));
      } else if (Fromkurs == "USD" && toKurs == "UZS") {
        toInput.value = Math.round(FromInput * Number(item.Rate));
      } else if (Fromkurs == "USD" && toKurs == "USD") {
        toInput.value = FromInput;
      }
    }
    if (item.Ccy == "RUB") {
      if (Fromkurs == "UZS" && toKurs == "RUB") {
        toInput.value = Math.round(FromInput / Number(item.Rate));
      } else if (Fromkurs == "RUB" && toKurs == "UZS") {
        toInput.value = Math.round(FromInput * Number(item.Rate));
      } else if (Fromkurs == "RUB" && toKurs == "RUB") {
        toInput.value = FromInput;
      }
    }
    if (Fromkurs == "UZS" && toKurs == "UZS") {
      toInput.value = FromInput;
    }
  })
  if (Fromkurs == "USD" && toKurs == "RUB") {
    let usd = data.filter(item => item.Ccy == "USD");
    let rub = data.filter(item => item.Ccy == "RUB");
    let toUZS = FromInput * Number(usd[0].Rate);
    let toRUB = toUZS / Number(rub[0].Rate)
    toInput.value = Math.round(toRUB);
  }
})