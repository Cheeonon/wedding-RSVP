import './Web.scss';
import cover from "../assets/img/cover.png";
import divider from "../assets/img/divider.png";
import Carousel from '../components/Carousel';
import RSVP from '../components/RSVP';

const Web = () => {
    return (
        <main className="web">
            <CoverImage src={cover} alt="Cover" />
            <MainText />
            <DividerImage src={divider} alt="Divider" />
            <EventDetails />
            <CarouselWrapper />
            <RSVPWrapper />
        </main>
    );
}

const CoverImage = ({ src, alt }) => (
    <div className="web__block">
        <img className="web__cover-img" src={src} alt={alt} />
    </div>
);

const MainText = () => (
    <div className="web__block">
        <div className="web__main-p web__main-quote">
            오직 나와 내 집은 여호와를 섬기겠노라<br></br> <span className='web__main-ref'>여호수아 24장 15절</span>
        </div>

        <div className="web__main-p">
            <p className="web__main-line">한성희 · 정미옥의 장남 <b className="web__main-highlighted">한규희</b></p> 
            <p className="web__main-line">박성우 · 김성희의 장녀 <b className="web__main-highlighted">박채린</b></p>
        </div>

        <div className="web__main-p">
            <p className="web__main-line">저희 두 사람, 이제는 한 몸을 이루어</p>
            <p className="web__main-line">오직 여호와를 섬기며 함께 열매 맺겠노라<br></br> 서약하려 합니다.</p>
            <p className="web__main-line">이 기쁜 순간을 함께하고 싶기에,<br></br> 귀하를 초대합니다.</p>
        </div>
    </div>
);

const DividerImage = ({ src, alt }) => (
    <img src={src} alt={alt} className="web__divider" />
);

const EventDetails = () => (
    <div className="web__block">
        <h2 className="web__event--date">2023년 11월 11일 토요일</h2>
        <div className="web__event-p">
            <p className='web__event-line web__event--title'>CEREMONY 세레모니 | 11 : 00 AM</p>
            <p className='web__event-line web__event--location'>ST. GEORGE ON YONGE ANGLICAN CHURCH</p>
            <p className='web__event-line web__event--location'>5350 Yonge St. North York, Canada</p>
            <a href="https://www.google.com/maps/place/St.+George+on+Yonge+Anglican+Church/@43.7740929,-79.4145068,17z/data=!4m15!1m8!3m7!1s0x882b2d72a2a70565:0xe083fff7bf433dab!2s5350+Yonge+St,+North+York,+ON+M2N+5R5!3b1!8m2!3d43.7740929!4d-79.4145068!16s%2Fg%2F11c48g9318!3m5!1s0x882b2d729e34b211:0x4eaf084d7533b101!8m2!3d43.7741329!4d-79.4145433!16s%2Fg%2F1th63_nb?entry=ttu" className="web__event-link" target="_blank" rel="noreferrer">GOOGLE MAP</a>
        </div>

        <div className="web__event-p">
            <p className="web__event-line web__event--title">RECEPTION 리셉션 | 12 : 30 PM</p>
            <p className='web__event-line web__event--location'>AUBERGE DU POMMIER</p>
            <p className='web__event-line web__event--location'>4150 Yonge St, North York</p>
            <a href="https://www.google.com/maps/place/Auberge+du+Pommier/@43.746904,-79.407782,17z/data=!4m15!1m8!3m7!1s0x882b3299e52a6d9f:0x1e0b65fd1c4ba8a9!2s4150+Yonge+St,+Toronto,+ON+M2P+2C6!3b1!8m2!3d43.746904!4d-79.407782!16s%2Fg%2F11c2grrf3n!3m5!1s0x882b3299fa9b7ea7:0x3645c0488d8067cf!8m2!3d43.7469808!4d-79.4077049!16s%2Fm%2F0526pt9?entry=ttu" className="web__event-link" target="_blank" rel="noreferrer">GOOGLE MAP</a>
            <p className="web__event-line web__event--parking">각 건물 내 지하 주차장을 이용하실 수 있습니다.</p>
            <p className="web__event-line web__event--parking-instruction">Underground parking is available for both location.</p>
        </div>
    </div>
);

const CarouselWrapper = () => (
    <div className="web__block">
        <Carousel />
    </div>
);

const RSVPWrapper = () => (
    <div className="web__block">
        <RSVP />
    </div>
);


export default Web;