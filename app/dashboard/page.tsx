import React from "react";
import { Component } from "./components/Component";
import { DashboardMacro } from "./components/DashboardMacro";
import { DashmacroRow } from "./components/DashmacroRow";
import { FiltersDropdown } from "./components/FiltersDropdown";
import { FiltersWrapper } from "./components/FiltersWrapper";
import { PageNavWrapper } from "./components/PageNavWrapper";
import { Radio } from "./components/Radio";
import { TopbarNav } from "./components/TopbarNav";

// @ts-nocheck

export default function DashboardMacroScreen(): JSX.Element {
  return (
    <div className="bg-[#f5f9fb] flex flex-row justify-center w-full">
      <div className="bg-f-6f-9fc w-[1440px] h-[1833px] relative">
        <div className="absolute top-[134px] left-[276px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
          Executive dashboard
        </div>
        <p className="absolute top-[176px] left-[276px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
          Dernière mise à jour des données le&nbsp;&nbsp;23 Décembre 2020
        </p>
        <div className="absolute w-[1144px] h-[520px] top-[653px] left-[276px] rounded-[6px]">
          <Component className="!h-[520px] !absolute !left-0 !w-[1144px] !top-0" text="Détail des performances" />
          <div className="absolute w-[1032px] h-[36px] top-[81px] left-[97px] bg-f-6f-9fc rounded-[5px_5px_0px_0px]" />
          <div className="absolute w-[347px] top-[91px] left-[97px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[12px] text-center tracking-[0] leading-[normal]">
            Réel 2020
          </div>
          <p className="w-[324px] left-[444px] absolute top-[91px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[12px] text-center tracking-[0] leading-[normal]">
            Delta Réel 2020 vs Budget
          </p>
          <p className="w-[361px] left-[768px] absolute top-[91px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[12px] text-center tracking-[0] leading-[normal]">
            Delta Réel 2020 vs Homologue
          </p>
          <div className="absolute top-[127px] left-[24px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            Mois de MeV
          </div>
          <div className="absolute top-[127px] left-[107px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Par.
          </div>
          <div className="absolute top-[127px] left-[486px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            Ventes
          </div>
          <div className="absolute top-[127px] left-[790px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            Par.
          </div>
          <div className="absolute top-[127px] left-[148px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Fournis
          </div>
          <div className="absolute w-[54px] top-[120px] left-[535px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal]">
            Taux de vente
          </div>
          <div className="left-[858px] absolute top-[127px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            Ventes
          </div>
          <div className="w-[54px] top-[120px] left-[903px] [font-family:'Lato-Black',Helvetica] font-black text-[11px] text-right absolute text-primary tracking-[0] leading-[normal]">
            Taux de vente
          </div>
          <div className="left-[636px] absolute top-[127px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            CA TTC
          </div>
          <div className="absolute top-[127px] left-[723px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            Marge
          </div>
          <div className="left-[1081px] absolute top-[127px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            Marge
          </div>
          <div className="left-[207px] text-right absolute top-[127px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            Ventes
          </div>
          <div className="w-[41px] top-[120px] left-[264px] [font-family:'Lato-Black',Helvetica] font-black text-[11px] text-right absolute text-primary tracking-[0] leading-[normal]">
            Taux de vente
          </div>
          <div className="left-[331px] absolute top-[127px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            CA TTC
          </div>
          <div className="left-[396px] absolute top-[127px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            Marge
          </div>
          <div className="left-[999px] absolute top-[127px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
            CA TTC
          </div>
          <div className="top-[160px] left-[18px] inline-flex flex-col items-start absolute">
            <DashmacroRow divClassName="!left-[310px]" elementClassName="!left-[432px]" property1="pair" />
            <DashmacroRow
              divClassNameOverride="!left-[310px]"
              elementClassNameOverride="!left-[434px]"
              elementKClassName="!left-[590px]"
              property1="im-pair"
              spanClassName="!text-[#d72638]"
              spanClassNameOverride="!text-[#d72638]"
              text="Févier"
              text1=" (-12%)"
              text2="(-12%)"
            />
            <DashmacroRow
              divClassName="!left-[310px]"
              elementClassName="!left-[432px]"
              property1="pair"
              text="Mars"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              divClassNameOverride="!left-[310px]"
              elementClassNameOverride="!left-[432px]"
              elementKClassNameOverride="!left-[684px]"
              property1="im-pair"
              spanClassName1="!text-[#d72638]"
              text="Avril"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              divClassName="!left-[310px]"
              elementClassName="!left-[432px]"
              property1="pair"
              text="Mai"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              divClassNameOverride="!left-[310px]"
              elementClassNameOverride="!left-[432px]"
              property1="im-pair"
              text="Juin"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              divClassName="!left-[310px]"
              elementClassName="!left-[432px]"
              property1="pair"
              text="Juillet"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              divClassNameOverride="!left-[310px]"
              elementClassNameOverride="!left-[432px]"
              property1="im-pair"
              text="Aout"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              divClassName="!left-[310px]"
              elementClassName="!left-[432px]"
              property1="pair"
              text="Septembre"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              divClassNameOverride="!left-[310px]"
              elementClassNameOverride="!left-[432px]"
              property1="im-pair"
              text="Octobre"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              className="!bg-[#e1f0f9]"
              divClassNameOverride="!left-[310px]"
              elementClassNameOverride="!left-[432px]"
              property1="im-pair"
              text="Total YtoD"
              text1=" (+12%)"
              text2="(+12%)"
            />
            <DashmacroRow
              className="!bg-[#b7dbf0]"
              divClassNameOverride="!left-[310px]"
              elementClassNameOverride="!left-[432px]"
              property1="im-pair"
              text="Total estimé"
              text1=" (+12%)"
              text2="(+12%)"
            />
          </div>
          <img className="absolute w-px h-[415px] top-[81px] left-[437px] object-cover" alt="Line" src="line-73.svg" />
          <img className="absolute w-px h-[415px] top-[81px] left-[770px] object-cover" alt="Line" src="line-74.svg" />
          <img className="absolute w-px h-[415px] top-[81px] left-[1129px] object-cover" alt="Line" src="line-76.svg" />
          <img className="absolute w-px h-[415px] top-[81px] left-[97px] object-cover" alt="Line" src="line-75.svg" />
        </div>
        <div className="absolute w-[1144px] h-[609px] top-[1194px] left-[276px] rounded-[6px]">
          <Component
            className="!h-[609px] !absolute !left-0 !w-[1144px] !top-0"
            text="Evolution du nombre d&#39;exemplaires vendus"
          />
          <img className="absolute w-[967px] h-px top-[473px] left-[90px] object-cover" alt="Line" src="line-93.svg" />
          <img className="absolute w-px h-[330px] top-[144px] left-[89px] object-cover" alt="Line" src="line-94.svg" />
          <img
            className="absolute w-px h-[330px] top-[144px] left-[1056px] object-cover"
            alt="Line"
            src="line-95.svg"
          />
          <div className="absolute top-[136px] left-[51px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            300k
          </div>
          <div className="top-[136px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            80%
          </div>
          <div className="top-[256px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            50%
          </div>
          <div className="top-[176px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            70%
          </div>
          <div className="top-[296px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            40%
          </div>
          <div className="top-[376px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            20%
          </div>
          <div className="top-[216px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            60%
          </div>
          <div className="top-[336px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            30%
          </div>
          <div className="top-[416px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            10%
          </div>
          <div className="top-[456px] left-[1068px] text-[12px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal] whitespace-nowrap">
            0%
          </div>
          <div className="absolute top-[298px] left-[51px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            150k
          </div>
          <div className="absolute top-[190px] left-[51px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            250k
          </div>
          <div className="absolute top-[244px] left-[51px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            200k
          </div>
          <div className="absolute top-[352px] left-[51px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            100k
          </div>
          <div className="absolute top-[406px] left-[58px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            50k
          </div>
          <div className="absolute top-[484px] left-[120px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Jan.20
          </div>
          <div className="absolute top-[484px] left-[202px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Fev.20
          </div>
          <div className="absolute top-[484px] left-[284px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Mars.20
          </div>
          <div className="absolute top-[484px] left-[375px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Avril.20
          </div>
          <div className="absolute top-[484px] left-[464px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Mai.20
          </div>
          <div className="absolute top-[484px] left-[548px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Juin.20
          </div>
          <div className="absolute top-[484px] left-[634px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Aout.20
          </div>
          <div className="absolute top-[484px] left-[724px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Sept.20
          </div>
          <div className="absolute top-[484px] left-[812px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Oct.20
          </div>
          <div className="absolute top-[484px] left-[896px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Nov.20
          </div>
          <div className="absolute top-[484px] left-[981px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[12px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Dec.20
          </div>
          <div className="top-[460px] left-[72px] text-[12px] text-right whitespace-nowrap absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal]">
            0
          </div>
          <div className="absolute w-[20px] h-[34px] top-[439px] left-[117px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[136px] top-[337px] left-[202px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[242px] top-[231px] left-[287px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[106px] top-[367px] left-[375px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[242px] top-[231px] left-[548px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[41px] top-[432px] left-[636px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[76px] top-[397px] left-[728px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[76px] top-[397px] left-[813px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[24px] top-[449px] left-[463px] bg-primary-l10" />
          <div className="absolute w-[20px] h-[42px] top-[431px] left-[139px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[120px] top-[353px] left-[224px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[174px] top-[299px] left-[309px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[86px] top-[387px] left-[397px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[304px] top-[169px] left-[570px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[52px] top-[421px] left-[658px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[82px] top-[391px] left-[750px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[82px] top-[391px] left-[835px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[96px] top-[377px] left-[920px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[68px] top-[405px] left-[1005px] bg-secondary-l10" />
          <div className="absolute w-[20px] h-[19px] top-[454px] left-[485px] bg-secondary-l10" />
          <img className="absolute w-[55px] h-px top-[437px] left-[113px] object-cover" alt="Line" src="line-96.svg" />
          <img className="absolute w-[55px] h-px top-[351px] left-[196px] object-cover" alt="Line" src="line-97.svg" />
          <img className="absolute w-[55px] h-px top-[310px] left-[284px] object-cover" alt="Line" src="line-98.svg" />
          <img className="absolute w-[55px] h-px top-[364px] left-[377px] object-cover" alt="Line" src="line-99.svg" />
          <img className="absolute w-[55px] h-px top-[451px] left-[460px] object-cover" alt="Line" src="line-100.svg" />
          <img className="absolute w-[55px] h-px top-[168px] left-[542px] object-cover" alt="Line" src="line-101.svg" />
          <img className="absolute w-[55px] h-px top-[412px] left-[630px] object-cover" alt="Line" src="line-102.svg" />
          <img className="absolute w-[55px] h-px top-[376px] left-[724px] object-cover" alt="Line" src="line-103.svg" />
          <img className="absolute w-[55px] h-px top-[376px] left-[812px] object-cover" alt="Line" src="line-104.svg" />
          <img className="absolute w-[55px] h-px top-[364px] left-[892px] object-cover" alt="Line" src="line-105.svg" />
          <img className="absolute w-[55px] h-px top-[388px] left-[976px] object-cover" alt="Line" src="line-106.svg" />
          <img className="absolute w-[695px] h-[131px] top-[198px] left-[138px]" alt="Vector" src="vector-1.svg" />
          <div className="absolute top-[99px] left-[36px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[13px] text-center tracking-[0] leading-[normal]">
            Vente volume
          </div>
          <div className="top-[99px] left-[1020px] [font-family:'Lato-Regular',Helvetica] font-normal text-[13px] text-center absolute text-primary tracking-[0] leading-[normal]">
            Taux de vente
          </div>
          <div className="absolute w-[469px] h-[16px] top-[564px] left-[342px]">
            <div className="absolute w-[16px] h-[16px] top-0 left-0 bg-primary-l10 rounded-[4px]" />
            <div className="absolute w-[16px] h-[16px] top-0 left-[97px] bg-secondary-l10 rounded-[4px]" />
            <div className="top-0 left-[29px] text-[13px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal]">
              2020
            </div>
            <div className="top-0 left-[126px] text-[13px] absolute [font-family:'Lato-Regular',Helvetica] font-normal text-primary tracking-[0] leading-[normal]">
              2019
            </div>
            <div className="absolute top-0 left-[248px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[13px] tracking-[0] leading-[normal]">
              Budget
            </div>
            <div className="top-0 left-[381px] [font-family:'Lato-Regular',Helvetica] font-normal text-[13px] absolute text-primary tracking-[0] leading-[normal]">
              Taux de Vente
            </div>
            <img className="absolute w-[30px] h-px top-[7px] left-[205px] object-cover" alt="Line" src="line-107.svg" />
            <img className="absolute w-[30px] h-[2px] top-[6px] left-[338px]" alt="Line" src="line-108.svg" />
          </div>
          <img
            className="absolute w-[1070px] h-px top-[539px] left-[30px] object-cover"
            alt="Line"
            src="line-117.svg"
          />
        </div>
        <div className="absolute w-[248px] h-[1738px] top-[95px] left-0">
          <FiltersWrapper className="!h-[1738px] !absolute !left-0 !top-0" />
          <img className="absolute w-[218px] h-px top-[236px] left-[15px] object-cover" alt="Line" src="line-62.svg" />
          <FiltersDropdown
            className="!absolute !left-[15px] !top-[83px]"
            property1="dropdown"
            property2="label"
            text="Fleurus presse"
            text1="Editeur"
          />
          <FiltersDropdown
            className="!absolute !left-[15px] !top-[405px]"
            property1="dropdown"
            property2="label"
            text="Kiosque"
            text1="Nature des points de vente"
          />
          <Radio className="!absolute !left-[15px] !top-[276px]" property1={false} text="Total" />
          <Radio className="!absolute !left-[15px] !top-[348px]" property1 text1="Nature des points de vente" />
          <Radio className="!absolute !left-[15px] !top-[312px]" property1={false} text="Gamme Produit" />
          <FiltersDropdown
            className="!absolute !left-[15px] !top-[153px]"
            property1="dropdown"
            property2="label"
            text="2020"
            text1="Année"
          />
        </div>
        <div className="absolute w-[1440px] h-[52px] top-0 left-0 bg-[100%_100%]">
          <TopbarNav className="!left-[459px] !top-[7px]" property1="nav" property2="one" />
        </div>
        <PageNavWrapper
          className="!absolute !left-0 !top-[52px]"
          pageNavText="EXECUTIVE DASHBOARD"
          pageNavText1="ANALYSE DETAILLÉE"
        />
        <div className="absolute w-[1144px] h-[401px] top-[222px] left-[270px] rounded-[6px]">
          <Component className="!h-[401px] !absolute !left-0 !w-[1144px] !top-0" text="Executive Figures" />
          <div className="absolute w-[914px] h-[36px] top-[82px] left-[217px] bg-f-6f-9fc rounded-[5px_5px_0px_0px]" />
          <div className="absolute w-[308px] top-[92px] left-[194px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[12px] text-center tracking-[0] leading-[normal]">
            Octobre 2020
          </div>
          <div className="absolute w-[314px] top-[92px] left-[502px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[12px] text-center tracking-[0] leading-[normal]">
            Cumul depuis 01/01/2020
          </div>
          <p className="absolute w-[314px] top-[92px] left-[816px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[12px] text-center tracking-[0] leading-[normal]">
            Cumul LTM vs LTM N-1
          </p>
          <div className="absolute top-[128px] left-[270px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Total
          </div>
          <div className="left-[559px] absolute top-[128px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Total
          </div>
          <div className="left-[875px] absolute top-[128px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Total
          </div>
          <div className="absolute top-[128px] left-[339px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            vs N-1
          </div>
          <div className="left-[657px] absolute top-[128px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            vs N-1
          </div>
          <div className="left-[973px] absolute top-[128px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            vs N-1
          </div>
          <div className="absolute top-[128px] left-[428px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            vs Budget
          </div>
          <div className="left-[746px] absolute top-[128px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            vs Budget
          </div>
          <div className="left-[1062px] absolute top-[128px] [font-family:'Lato-Black',Helvetica] font-black text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
            vs Budget
          </div>
          <div className="top-[153px] left-[25px] inline-flex flex-col items-start absolute">
            <DashboardMacro divClassName="!left-[522px]" divClassNameOverride="!left-[837px]" property1="pair" />
            <DashboardMacro
              className="!relative"
              divClassName1="!left-[522px]"
              divClassName2="!left-[837px]"
              property1="im-pair"
              text="Taux de vente moyen"
            />
            <DashboardMacro
              divClassName="!left-[522px]"
              divClassNameOverride="!left-[837px]"
              property1="pair"
              text="Marge (%)"
            />
            <DashboardMacro
              className="!relative"
              divClassName1="!left-[522px]"
              divClassName2="!left-[837px]"
              property1="im-pair"
              text="Marge (€)"
            />
            <DashboardMacro
              divClassName="!left-[522px]"
              divClassNameOverride="!left-[837px]"
              property1="pair"
              text="Marge moyenne (€)/PdV Servi"
            />
            <DashboardMacro
              className="!relative"
              divClassName1="!left-[522px]"
              divClassName2="!left-[837px]"
              property1="im-pair"
              text="Marge moyenne (€)/PdV Fourni"
            />
            <div className="relative w-[1105px] h-[23px] bg-f-6f-9fc">
              <div className="absolute top-[4px] left-[14px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                Nr. Exemplaires fournis
              </div>
              <div className="absolute top-[4px] left-[257px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                17
              </div>
              <div className="absolute top-[4px] left-[537px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                137
              </div>
              <div className="absolute top-[4px] left-[852px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                185
              </div>
            </div>
            <DashboardMacro
              className="!relative"
              divClassName1="!left-[537px]"
              divClassName2="!left-[852px]"
              divClassName3="!left-[257px]"
              hasDiv={false}
              hasDiv1={false}
              hasDiv2={false}
              hasDiv3={false}
              hasDiv4={false}
              property1="im-pair"
              text="Nr. Parutions remontées"
              text1="17"
              text2="137"
              text3="185"
              visible={false}
            />
            <div className="relative w-[1105px] h-[23px] bg-f-6f-9fc">
              <div className="absolute top-[4px] left-[14px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                Nr. Parutions réglées
              </div>
              <div className="absolute top-[4px] left-[257px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                17
              </div>
              <div className="absolute top-[4px] left-[537px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                137
              </div>
              <div className="absolute top-[4px] left-[852px] [font-family:'Lato-Regular',Helvetica] font-normal text-primary text-[11px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
                185
              </div>
            </div>
            <DashboardMacro
              className="!relative"
              divClassName1="!left-[537px]"
              divClassName2="!left-[852px]"
              divClassName3="!left-[257px]"
              hasDiv={false}
              hasDiv1={false}
              hasDiv2={false}
              hasDiv3={false}
              hasDiv4={false}
              property1="im-pair"
              text="Nr. Parutions homologues"
              text1="17"
              text2="137"
              text3="185"
              visible={false}
            />
          </div>
          <img className="absolute w-px h-[301px] top-[82px] left-[521px] object-cover" alt="Line" src="line-109.svg" />
          <img className="absolute w-px h-[301px] top-[82px] left-[825px] object-cover" alt="Line" src="line-110.svg" />
          <img
            className="absolute w-px h-[301px] top-[82px] left-[1129px] object-cover"
            alt="Line"
            src="line-111.svg"
          />
          <img className="absolute w-px h-[301px] top-[82px] left-[217px] object-cover" alt="Line" src="line-112.svg" />
        </div>
      </div>
    </div>
  );
};
