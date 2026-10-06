import React from 'react';
import { Check } from 'lucide-react';
import './RVCRMarketPage.css';

export default function RVCRMarketPage() {
  const headsList = [
    { text: "Market spread. TAM SAM SOM." },
    { text: "Market Barriers and entry method." },
    { text: "Price point analysis." },
    { text: "Pricing and structuring" },
    { text: "Customer analysis." },
    { text: "Trends; Competition overview." }
  ];

  return (
    <div className="rvcr-market-page-root">
      {/* 1. Hero Section matching reference screenshot exactly */}
      <section className="market-hero-section">
        <div className="market-hero-container">
          <div className="hero-left-content">
            <span className="hero-tag">RVCR Market</span>
            <h1 className="hero-main-title">
              RVCR Technology<br />Ecosystem
            </h1>
            <p className="hero-desc">
              The unprecedented climate challenge needs is beyond the scope of conventional innovations RVCR enables OEM’s with newer long term strategies for Zero Carbon Technologies.
            </p>
          </div>
          <div className="hero-right-banner">
            <img 
              src="/images/rvcr-market.png" 
              alt="ENERGY TRANSPORT UTILITIES Ecosystem" 
              className="hero-angled-img"
              onError={(e) => { e.target.src = '/images/rvcr-market-hero-exact.png'; }}
            />
          </div>
        </div>
      </section>

      {/* 2. RVCR Market Overview */}
      <section className="market-section overview-section">
        <div className="container">
          <div className="overview-2col-row">
            <div className="overview-media-col">
              <img 
                src="/images/gif-1.gif" 
                alt="RVCR Engine Core" 
                className="overview-engine-img"
              />
            </div>
            <div className="overview-content-col">
              <h2 className="section-title">RVCR Market Overview</h2>
              <p className="overview-text">
                The New Generation RVCR Technology Machine systems are for transport energy industry players and OEM’s. It enhances the Client’s product line and making it the most attractive option available in the market. The RVCR Products demand is dependent on the end-Product demand and its Drivers and Dynamics.
              </p>
            </div>
          </div>

          <div className="overview-full-text">
            <p>
              The ‘Total Addressable Market’ covers the entire range of applications (covered under the head Applications) of RVCR Technology is massive. The applications are classed in an easy to grasp Hierarchy and represented in a tree Model. It starts with the primary application aspect of the application being either a ‘Driving’ (Prime-Mover/Motor) type or a ‘Driven’ (Pumping) type and then are further classified.
            </p>
            <p>
              The Zero Carbon Technology demand among Sector & Industry verticals is segment specific. We engage 3rd party market analyst and experts for Survey, analysis, and evaluation.
            </p>
          </div>

          {/* Heads Card */}
          <div className="heads-card-box">
            <h3 className="heads-card-title">The various heads include:</h3>
            <div className="heads-3col-grid">
              {headsList.map((item, idx) => (
                <div key={idx} className="head-item">
                  <div className="head-check-icon">
                    <Check size={16} />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="reporting-note">
            See reporting segment under — A’. Engine Market and Primary Priority 'RVCR' Primary Market. Green Energy Sector Products. Demand and Market dynamics. The Zero Carbon Demand among Sector & Industry Verticals.
          </p>
        </div>
      </section>

      {/* 3. Creating Newer Markets */}
      <section className="market-section newer-markets-section">
        <div className="container">
          <div className="newer-markets-2col">
            <div className="newer-media-col">
              <img 
                src="/images/thoughtful-man-with-infographic-with-heads.jpg" 
                alt="Creating Newer Markets Infographic" 
                className="newer-infographic-img"
              />
            </div>
            <div className="newer-content-col">
              <h2 className="section-title">Creating Newer markets</h2>
              <p className="newer-text">
                RVCR technology prime-mover would replace today’s products and shall alter the markets and its demands. The RVCR Prime-Mover not just make the conventional prime-movers obsolete but adds new features which addresses differing market needs by a single product. The newer features (like multifuel-flexibility in I.C.Engine application caters to both petrol or diesel Engine segments) address across segment requirements, hence RVCR mergers conventional market segments creating newer markets. Segment specific markets are dealt under specific application development projects. (Under the Individual projects)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Market Blueprint Banner */}
      <section className="the-market-banner">
        <div className="container">
          <h2 className="banner-title">The Market</h2>
          <p className="banner-sub">
            GYATK’s market are covered in two heads namely the primary first priority ‘RVCR’ market and secondary market for latter diversification ‘Non RVCR’ and these are sub classified further.
          </p>
        </div>
      </section>

      {/* 5. RVCR Market & Stock Chart */}
      <section className="market-section rvcr-market-graph-section">
        <div className="container">
          <div className="graph-2col-row">
            <div className="graph-text-col">
              <h2 className="section-title">RVCR market</h2>
              <p className="graph-p">
                RVCR technology prime-mover would replace today’s products and shall alter the markets and its demands. The RVCR Prime-Mover not just make the conventional prime-movers obsolete but adds new features which addresses differing market needs by a single product. The newer features (like multifuel-flexibility in I.C.Engine application caters to both petrol or diesel Engine segments) address across segment requirements, hence RVCR mergers conventional market segments creating newer markets.
              </p>
              <p className="graph-p">
                Segment specific markets are dealt under specific application development projects. (Under the Individual projects)
              </p>
            </div>
            <div className="graph-media-col">
              <img 
                src="/images/patents-dashboard2-1-1.jpg" 
                alt="RVCR Market Financial & Patent Growth" 
                className="graph-stock-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Application Classification & Consumers Cards (Pink Background) */}
      <section className="market-section dual-cards-pink-section">
        <div className="container">
          <div className="dual-cards-flex">
            {/* Left Dark Blue Card */}
            <div className="dual-card dark-blue-card">
              <h3 className="card-header-title white-text">
                The RVCR market is broadly classified application wise and is listed below (list n)
              </h3>
              <div className="card-tree-list white-text">
                <div className="tree-group">
                  <h4 className="tree-h4">1. Engines</h4>
                  <ul className="tree-ul">
                    <li><strong>Land:</strong> Transport sector (passenger vehicles, commercial vehicles), Agri sector and material handling, Special purpose machines</li>
                    <li><strong>Marine</strong></li>
                    <li><strong>Aviation</strong></li>
                    <li><strong>Standalone Prime movers</strong></li>
                  </ul>
                </div>
                <div className="tree-group">
                  <h4 className="tree-h4">2. Independent fluid handling machines</h4>
                  <ul className="tree-ul">
                    <li>Compressors</li>
                    <li>Pumps</li>
                  </ul>
                </div>
                <div className="tree-group">
                  <h4 className="tree-h4">3. Independent fluid motors</h4>
                  <ul className="tree-ul">
                    <li>Positive displacement fluid power motors</li>
                    <li>Miscellaneous Fluid motor applications</li>
                  </ul>
                </div>
                <div className="tree-group">
                  <h4 className="tree-h4">4. Hydraulics</h4>
                  <ul className="tree-ul">
                    <li>Pumps</li>
                    <li>Motors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Light Card */}
            <div className="dual-card light-card">
              <h3 className="card-header-title dark-text">
                RVCR consumers are further categorized for ease of strategies and approach and is listed below (list m)
              </h3>
              <div className="card-tree-list dark-text">
                <div className="tree-group">
                  <h4 className="tree-h4">1. Private sector and public sector OEMs of any RVCR application</h4>
                  <ul className="tree-ul">
                    <li>OEMs in Auto sector, tractor, Railway and mining OEM’s, Power sector, Agri equipment</li>
                    <li>Fluid handlers and fluid equipment handlers like OEMs in pump, compressors, metering devices and hydraulics</li>
                    <li>Specialised fluid handlers like Oil rigs, refineries and chemical plants</li>
                    <li>Bio medical, Bio chemical handlers</li>
                  </ul>
                </div>
                <div className="tree-group">
                  <h4 className="tree-h4">2. Autonomous research organisations</h4>
                  <ul className="tree-ul">
                    <li>Space organisations use hydraulic systems.</li>
                  </ul>
                </div>
                <div className="tree-group">
                  <h4 className="tree-h4">3. Government organisations</h4>
                  <ul className="tree-ul">
                    <li>Defence applications</li>
                    <li>Aero space</li>
                  </ul>
                </div>
                <p className="card-footer-note">
                  since RVCR applications crossover into other categories and type of organisations, the application wise broad market categorisation above is carried out for ease of tabulation and is not a demarcated segregation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RVCR Green fuel Engines market */}
      <section className="market-section green-engines-section">
        <div className="container">
          <div className="green-engines-2col">
            <div className="green-engines-text-col">
              <span className="section-tag green-tag">Green Transition</span>
              <h2 className="section-title">RVCR Green fuel Engines market</h2>
              <p className="green-p">
                The Auto sector market alone in US alone is estimated at more than 250 billion dollars a year and considering the primemovers as 20 to 35 % of the vehicle cost, the RVCR market implications can be conjectured on. GYATK’s Market extends globally which amount to several multiples of the US market.
              </p>
              <p className="green-p">
                The link below is one such report about the automobiles and Truck statistics.
              </p>
              <p className="green-p">
                The auto engine market is just a part of the total engine market that range across market areas in power generators, Agro industry, Material handling, construction equipment, mass transport, specialised vehicles, etc. The list of application extends to marine aviation, and an equally large in other applications.
              </p>
              <p className="green-p">
                The Auto sector companies have funded millions of dollars in their pursuit of VCR feature feasibility as the next natural step towards market demand of less polluting, higher efficiency, and fuel flexibility. Gyatk brings in the solution to this long-awaited correction for the market.
              </p>
            </div>
            <div className="green-engines-media-col">
              <img 
                src="/images/26252312_7168169.jpg" 
                alt="Green Fuel & Zero Carbon Illustration" 
                className="green-fuel-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. RVCR Pumps compressors and motors market */}
      <section className="market-section pumps-section">
        <div className="container">
          <div className="pumps-2col">
            <div className="pumps-media-col">
              <img 
                src="/images/3d-rendering-hydraulic-elements.jpg" 
                alt="Hydraulic Elements & Pumps" 
                className="pumps-hydraulic-img"
              />
            </div>
            <div className="pumps-text-col">
              <span className="section-tag blue-tag">Industrial Applications</span>
              <h2 className="section-title">RVCR Pumps compressors and motors market</h2>
              <p className="pumps-p">
                The RVCR applications in products other than engines are far more massive. Variable delivery feature of fluid handling machines makes an ideal for compressors and the air conditioning market, which is a beyond doubt an RVCR domain market, in itself speaks of the market volume. The compressor market is massive which includes high end and hazardous chemical, petrochemical applications and not to mention industrial gases and biomedical gases.
              </p>
              <p className="pumps-p">
                The variable delivery and rotary positive displacement is a feature much desired in Pumping application and metering devices. The pump application are also related to industrial fluids transfer in both hazardous and non-hazardous application including varied type of specialised applications like the deep well pumps, submersible pumps etc.
              </p>
              <p className="pumps-p">
                The Pump application of immense relevance is the Hydraulic industry, which in itself prevails over a massive application range, the Variable delivery Pumps are much complicated and RVCR makes it way in into this market for its ease and the quantum of variation RVCR hydraulic units deliver. Hydraulic applications are used almost in every aspect of industry and RVCR hydraulic pumps have a market in these applications namely cranes, heavy engineering equipment’s, ships, road transport equipment, space crafts, control mechanism etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Full-Width Dark OEM Banner */}
      <section className="oem-dark-banner">
        <div className="oem-overlay"></div>
        <div className="container oem-container">
          <h2 className="oem-banner-text">
            These markets are addressed to by large number of OEM worldwide and is a huge market
          </h2>
        </div>
      </section>

      {/* 10. Power generator Motors & Summary */}
      <section className="market-section power-gen-section">
        <div className="container">
          <div className="power-gen-2col">
            <div className="power-gen-media">
              <img 
                src="/images/mce-5.jpg" 
                alt="RVCR Power Generator Engine Cutaway" 
                className="power-gen-img"
              />
            </div>
            <div className="power-gen-content">
              <h2 className="section-title">Power generator Motors</h2>
              <p className="power-p">
                There is a strong surge of wind turbines and ocean waterpower generators which is an upcoming market. The RVCR Technology based on simple rotary positive displacement feature makes motor applications exceptionally efficient as fluid motors for Unconventional Power Generators.
              </p>

              <h3 className="summary-title-h3">Summary</h3>
              <p className="power-p">
                The unprecedented climate challenge needs is beyond the scope of conventional innovations RVCR enables OEM’s with newer long term strategies for Zero Carbon Technologies effectively deal with 21st century market drivers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
