const DATA={};
["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"].forEach((a,i)=>{
["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"].forEach((b,j)=>{
const k=`${a}-${b}`;const scores={
"Aries-Aries":[75,4,5,3],"Aries-Taurus":[45,2,3,3],"Aries-Gemini":[85,5,5,4],"Aries-Cancer":[40,2,2,2],
"Aries-Leo":[90,5,5,4],"Aries-Virgo":[35,2,2,3],"Aries-Libra":[70,4,4,3],"Aries-Scorpio":[60,4,3,4],
"Aries-Sagittarius":[95,5,5,5],"Aries-Capricorn":[50,3,2,4],"Aries-Aquarius":[85,4,5,5],"Aries-Pisces":[55,3,3,2],
"Taurus-Taurus":[80,5,4,4],"Taurus-Gemini":[40,2,3,2],"Taurus-Cancer":[90,5,5,4],"Taurus-Leo":[50,3,3,3],
"Taurus-Virgo":[95,5,5,5],"Taurus-Libra":[65,4,4,3],"Taurus-Scorpio":[75,5,3,4],"Taurus-Sagittarius":[45,2,3,2],
"Taurus-Capricorn":[90,5,4,5],"Taurus-Aquarius":[35,2,2,2],"Taurus-Pisces":[80,5,4,3],
"Gemini-Gemini":[75,4,5,3],"Gemini-Cancer":[45,2,3,2],"Gemini-Leo":[80,4,5,4],"Gemini-Virgo":[60,3,4,4],
"Gemini-Libra":[90,5,5,4],"Gemini-Scorpio":[40,2,2,3],"Gemini-Sagittarius":[85,4,5,4],"Gemini-Capricorn":[35,2,2,3],
"Gemini-Aquarius":[95,5,5,5],"Gemini-Pisces":[45,2,3,2],
"Cancer-Cancer":[80,5,4,3],"Cancer-Leo":[50,3,3,3],"Cancer-Virgo":[85,4,5,5],"Cancer-Libra":[55,3,3,3],
"Cancer-Scorpio":[90,5,4,4],"Cancer-Sagittarius":[40,2,2,2],"Cancer-Capricorn":[75,4,3,5],"Cancer-Aquarius":[35,2,2,2],
"Cancer-Pisces":[95,5,5,4],
"Leo-Leo":[75,4,4,3],"Leo-Virgo":[45,2,3,3],"Leo-Libra":[85,5,5,4],"Leo-Scorpio":[55,3,2,4],
"Leo-Sagittarius":[95,5,5,5],"Leo-Capricorn":[45,2,2,4],"Leo-Aquarius":[70,3,4,4],"Leo-Pisces":[50,3,3,3],
"Virgo-Virgo":[80,4,4,5],"Virgo-Libra":[60,3,4,4],"Virgo-Scorpio":[85,4,4,5],"Virgo-Sagittarius":[45,2,3,3],
"Virgo-Capricorn":[95,5,4,5],"Virgo-Aquarius":[50,2,3,3],"Virgo-Pisces":[75,4,4,3],
"Libra-Libra":[80,5,5,3],"Libra-Scorpio":[60,3,3,4],"Libra-Sagittarius":[80,4,5,4],"Libra-Capricorn":[55,3,3,4],
"Libra-Aquarius":[90,5,5,5],"Libra-Pisces":[65,4,4,3],
"Scorpio-Scorpio":[75,5,3,4],"Scorpio-Sagittarius":[55,3,3,3],"Scorpio-Capricorn":[85,4,4,5],"Scorpio-Aquarius":[50,3,2,3],
"Scorpio-Pisces":[90,5,4,4],
"Sagittarius-Sagittarius":[85,5,5,4],"Sagittarius-Capricorn":[50,3,2,4],"Sagittarius-Aquarius":[85,4,5,5],"Sagittarius-Pisces":[55,3,3,2],
"Capricorn-Capricorn":[85,5,3,5],"Capricorn-Aquarius":[50,2,3,4],"Capricorn-Pisces":[70,4,3,4],
"Aquarius-Aquarius":[85,4,5,5],"Aquarius-Pisces":[55,3,3,2],
"Pisces-Pisces":[85,5,4,3]
};
const t=scores[k]||scores[`${b}-${a}`]||[50,3,3,3];
DATA[k]={score:t[0],love:t[1],friend:t[2],work:t[3],
overview:["A unique cosmic connection forms between these signs.","The stars reveal fascinating dynamics in this pairing.","These two signs create an interesting astrological dance."][Math.floor(Math.random()*3)],
love:`Love compatibility: ${t[1]}/5. ${t[1]>=4?"Strong romantic potential with natural chemistry.":t[1]===3?"Moderate compatibility requiring effort and understanding.":"Challenging but growth is possible with patience."}`,
friendship:`Friendship rating: ${t[2]}/5. ${t[2]>=4?"Excellent friendship potential with shared interests.":t[2]===3?"Decent friendship when both make effort.":"Friendship requires significant compromise."}`,
work:`Work compatibility: ${t[3]}/5. ${t[3]>=4?"Highly productive professional partnership.":t[3]===3?"Functional working relationship with clear roles.":"Workplace dynamics may be challenging."}`};
});
});
