import s from './Choose.module.scss'
import {motion} from "framer-motion";
import { Variants } from "framer-motion";
const topAnimation: Variants = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: custom * 0.4 }
    })
};


const hiddenAnimation: Variants = {
    hidden: {
        scale: 0,
    },
    visible: (custom: number) => ({
        scale: 1.0,
        transition: { duration: 0.05, delay: custom * 0.4 }
    })
};


const Choose = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className={s.choose}>

            <div className="container">
                <motion.h2 custom={1} variants={topAnimation} className={s.choose__title}>
                    А КАКОЙ <span>ЯЗЫК ПРОГРАММИРОВАНИЯ</span> <br/>
                    ВЫБЕРЕШЬ <span>ТЫ</span>?
                </motion.h2>

                <div className={s.choose__content}>

                    <motion.div
                        custom={2} variants={hiddenAnimation}
                        className={s.choose__content_card}>

                        <h2 className={s.choose__content_card_title}>
                            <span>
                                <svg width="52" height="92" viewBox="0 0 52 92" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.6372 1H8.39045C4.30882 1 1 4.30882 1 8.39045V83.432C1 87.5136 4.30882 90.8224 8.39045 90.8224H43.6372C47.7189 90.8224 51.0277 87.5136 51.0277 83.432V8.39045C51.0277 4.30882 47.7189 1 43.6372 1Z" stroke="#14161D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15 39.9444C15 39.4228 15.4477 39 16 39H46C46.5523 39 47 39.4228 47 39.9444C47 40.466 46.5523 40.8889 46 40.8889H16C15.4477 40.8889 15 40.466 15 39.9444ZM17 43.7222C17 43.2006 17.4477 42.7778 18 42.7778H34C34.5523 42.7778 35 43.2006 35 43.7222C35 44.2438 34.5523 44.6667 34 44.6667H18C17.4477 44.6667 17 44.2438 17 43.7222ZM16 46.5556C15.4477 46.5556 15 46.9784 15 47.5C15 48.0216 15.4477 48.4444 16 48.4444H44C44.5523 48.4444 45 48.0216 45 47.5C45 46.9784 44.5523 46.5556 44 46.5556H16ZM17 51.2778C17 50.7562 17.4477 50.3333 18 50.3333H30C30.5523 50.3333 31 50.7562 31 51.2778C31 51.7994 30.5523 52.2222 30 52.2222H18C17.4477 52.2222 17 51.7994 17 51.2778ZM18 54.1111C17.4477 54.1111 17 54.534 17 55.0556C17 55.5772 17.4477 56 18 56H30C30.5523 56 31 55.5772 31 55.0556C31 54.534 30.5523 54.1111 30 54.1111H18Z" fill="#E4E8F4"/>
<path d="M6.87236 47.4278C6.53778 47.4278 6.26733 47.6832 6.26733 47.9992C6.26733 48.3152 6.53778 48.5706 6.87236 48.5706C7.576 48.5706 8.13081 48.7849 8.56823 49.2255C9.84543 50.514 9.67363 53.218 9.67063 53.2848V60.5704C9.67063 62.4052 10.2103 63.8206 11.2733 64.7737C12.5493 65.9189 14.1599 66 14.5882 66C14.6475 66 14.6838 65.9977 14.6935 65.9977C15.0275 65.9823 15.284 65.7132 15.2665 65.3972C15.2489 65.0806 14.9591 64.8372 14.6306 64.856C14.6148 64.8629 13.1876 64.9155 12.1064 63.9452C11.292 63.2155 10.8806 62.0795 10.8806 60.5704L10.8794 53.3231C10.8891 53.1922 11.09 50.098 9.45403 48.4472C9.28523 48.2769 9.10253 48.1266 8.90883 47.9998C9.10253 47.8718 9.28523 47.7232 9.45403 47.5518C11.09 45.8987 10.8891 42.8061 10.8806 42.7141V35.4286C10.8806 33.9252 11.2896 32.7932 12.0967 32.0623C13.1658 31.0944 14.6124 31.1401 14.6336 31.1424C14.967 31.1618 15.2489 30.9161 15.2665 30.6012C15.2828 30.2858 15.0269 30.0178 14.6935 30.0007C14.61 30.0018 12.7272 29.9207 11.2745 31.2252C10.2103 32.1795 9.67183 33.5943 9.67183 35.4286L9.67303 42.7524C9.72743 43.505 9.63433 45.6958 8.57123 46.7706C8.13202 47.2129 7.57721 47.4278 6.87236 47.4278Z" fill="#3980FF"/>
<path d="M12.4102 1H39.6176C39.3416 2.92845 37.6831 4.41098 35.6783 4.41098H16.3494C14.3447 4.41098 12.6862 2.92845 12.4102 1Z" fill="#14161D" stroke="#14161D"/>
</svg>
                            </span>
                            Разработка мобильных приложений
                        </h2>

                        <p className={s.choose__content_card_text}>
                            Курс фронтенд разработки: Изучите языки HTML, CSS и JavaScript, а также популярные фреймворки и инструменты, чтобы создавать красивые и интерактивные веб-страницы. Вы научитесь создавать динамические пользовательские интерфейсы и разрабатывать фронтенд часть веб-приложений.
                        </p>

                        <div className={s.choose__content_card_box}>
                            <button className={s.choose__content_card_btn}>
                                iOS
                            </button>

                            <button className={s.choose__content_card_btn}>
                                Android
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={3} variants={hiddenAnimation}
                        className={s.choose__content_card}>

                        <h2 className={s.choose__content_card_title}>
                            <span>
                                <svg width="49" height="66" viewBox="0 0 49 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M15.2815 40.7552C15.2815 40.4256 15.5394 40.1576 15.8577 40.1576H33.1429C33.4611 40.1576 33.7191 40.4256 33.7191 40.7552C33.7191 41.0856 33.4611 41.3529 33.1429 41.3529H15.8577C15.5394 41.3529 15.2815 41.0856 15.2815 40.7552ZM16.4339 43.1458C16.4339 42.8154 16.6918 42.5481 17.01 42.5481H26.2288C26.5471 42.5481 26.805 42.8154 26.805 43.1458C26.805 43.4753 26.5471 43.7426 26.2288 43.7426H17.01C16.6918 43.7426 16.4339 43.4753 16.4339 43.1458ZM15.8577 44.9379C15.5394 44.9379 15.2815 45.2059 15.2815 45.5355C15.2815 45.8659 15.5394 46.1331 15.8577 46.1331H31.9906C32.3088 46.1331 32.5668 45.8659 32.5668 45.5355C32.5668 45.2059 32.3088 44.9379 31.9906 44.9379H15.8577ZM16.4339 47.9252C16.4339 47.5956 16.6918 47.3284 17.01 47.3284H23.9242C24.2423 47.3284 24.5003 47.5956 24.5003 47.9252C24.5003 48.2556 24.2423 48.5229 23.9242 48.5229H17.01C16.6918 48.5229 16.4339 48.2556 16.4339 47.9252ZM17.01 49.7181C16.6918 49.7181 16.4339 49.9854 16.4339 50.3158C16.4339 50.6454 16.6918 50.9134 17.01 50.9134H23.9242C24.2423 50.9134 24.5003 50.6454 24.5003 50.3158C24.5003 49.9854 24.2423 49.7181 23.9242 49.7181H17.01Z" fill="#E4E8F4"/>
<path d="M6.41133 45.4897C6.21855 45.4897 6.06271 45.6509 6.06271 45.8509C6.06271 46.0509 6.21855 46.2121 6.41133 46.2121C6.81673 46.2121 7.13644 46.3481 7.38844 46.6267C8.12439 47.4422 8.02535 49.1525 8.02365 49.1946V53.804C8.02365 54.9652 8.33458 55.8609 8.94708 56.4634C9.68229 57.1882 10.6102 57.2392 10.8571 57.2392C10.8912 57.2392 10.9121 57.2375 10.9177 57.2375C11.1102 57.2278 11.258 57.0578 11.2479 56.8578C11.2377 56.6577 11.0708 56.5039 10.8815 56.5152C10.8724 56.5201 10.05 56.5533 9.42711 55.9394C8.95784 55.4778 8.72081 54.7587 8.72081 53.804L8.72015 49.2189C8.72568 49.1363 8.84147 47.179 7.89879 46.1343C7.80159 46.0266 7.69628 45.9311 7.58477 45.8509C7.69628 45.7699 7.80159 45.676 7.89879 45.5675C8.84147 44.522 8.72568 42.5655 8.72081 42.5072V37.8978C8.72081 36.9471 8.95652 36.2304 9.42151 35.768C10.0375 35.1558 10.871 35.185 10.8832 35.1858C11.0753 35.1987 11.2377 35.0433 11.2479 34.844C11.2572 34.644 11.1098 34.4748 10.9177 34.4642C10.8696 34.4642 9.78473 34.4132 8.94774 35.2384C8.33458 35.8425 8.02432 36.7374 8.02432 37.8978L8.02505 42.5315C8.0564 43.0077 8.00271 44.3933 7.39021 45.0735C7.1371 45.3537 6.81747 45.4897 6.41133 45.4897Z" fill="#3980FF"/>
<path d="M42.5892 45.4897C42.782 45.4897 42.9377 45.6509 42.9377 45.8509C42.9377 46.0509 42.782 46.2121 42.5892 46.2121C42.1837 46.2121 41.8641 46.3481 41.612 46.6267C40.8761 47.4422 40.9751 49.1525 40.9768 49.1946V53.804C40.9768 54.9652 40.6659 55.8609 40.0534 56.4634C39.3182 57.1882 38.3902 57.2392 38.1434 57.2392C38.1093 57.2392 38.0883 57.2375 38.0827 57.2375C37.8903 57.2278 37.7425 57.0578 37.7526 56.8578C37.7627 56.6577 37.9297 56.5039 38.119 56.5152C38.1281 56.5201 38.9504 56.5533 39.5734 55.9394C40.0426 55.4778 40.2797 54.7587 40.2797 53.804L40.2803 49.2189C40.2747 49.1363 40.159 47.179 41.1016 46.1343C41.1989 46.0266 41.3042 45.9311 41.4157 45.8509C41.3042 45.7699 41.1989 45.676 41.1016 45.5675C40.159 44.522 40.2747 42.5655 40.2797 42.5072V37.8978C40.2797 36.9471 40.044 36.2304 39.579 35.768C38.963 35.1558 38.1295 35.185 38.1173 35.1858C37.9252 35.1987 37.7627 35.0433 37.7526 34.844C37.7433 34.644 37.8907 34.4748 38.0827 34.4642C38.1309 34.4642 39.2158 34.4132 40.0528 35.2384C40.6659 35.8425 40.9762 36.7374 40.9762 37.8978L40.9754 42.5315C40.9441 43.0077 40.9978 44.3933 41.6103 45.0735C41.8633 45.3537 42.183 45.4897 42.5892 45.4897Z" fill="#3980FF"/>
<path d="M39.7859 12.2759C39.8147 12.47 39.9662 12.6157 40.1454 12.6157H43.9565C46.2366 12.6157 48.085 14.6453 48.085 17.1493V59.8931C48.085 62.397 46.2366 64.4264 43.9565 64.4264H5.0287C2.74857 64.4264 0.900205 62.397 0.900205 59.8931V17.1493C0.900205 14.6453 2.74857 12.6157 5.0287 12.6157H8.85507C9.03421 12.6157 9.18577 12.47 9.21453 12.2759C9.25081 12.031 9.08089 11.8058 8.855 11.8058H5.0287C2.34128 11.8058 0.162704 14.198 0.162704 17.1493V59.8931C0.162704 62.8441 2.34128 65.2362 5.0287 65.2362H43.9565C46.6439 65.2362 48.8225 62.8441 48.8225 59.8931V17.1493C48.8225 14.198 46.6439 11.8058 43.9565 11.8058H40.1454C39.9195 11.8058 39.7496 12.031 39.7859 12.2759Z" fill="#14161D"/>
<path d="M24.6886 29.3702C31.9614 29.3702 37.8572 22.8964 37.8572 14.9105C37.8572 6.92472 31.9614 0.450928 24.6886 0.450928C17.4158 0.450928 11.52 6.92472 11.52 14.9105C11.52 22.8964 17.4158 29.3702 24.6886 29.3702Z" fill="#FEF4FF"/>
<path d="M22.081 13.0405V12.5405C21.8049 12.5405 21.581 12.7643 21.581 13.0405H22.081ZM22.081 14.0338L22.4507 14.3705L22.581 14.2274V14.0338H22.081ZM20.5366 14.3248L20.167 14.6614H20.167L20.5366 14.3248ZM23.8903 20.4907H24.3903V20.2971L24.26 20.154L23.8903 20.4907ZM22.9857 19.4973H22.4857V19.6909L22.616 19.834L22.9857 19.4973ZM22.9857 18.0073H23.4857V17.8137L23.3553 17.6706L22.9857 18.0073ZM22.081 17.0139H21.581V17.2075L21.7113 17.3506L22.081 17.0139ZM22.081 16.0205V15.5205C21.8049 15.5205 21.581 15.7444 21.581 16.0205H22.081ZM26.1043 8.07367V10.0604H27.1043V8.07367H26.1043ZM25.6997 10.5537H24.795V11.5537H25.6997V10.5537ZM22.9857 12.5405H22.081V13.5405H22.9857V12.5405ZM21.581 13.0405V14.0338H22.581V13.0405H21.581ZM21.7113 13.6972L21.4464 13.9881L22.1857 14.6614L22.4507 14.3705L21.7113 13.6972ZM20.9063 13.9881L19.2843 12.2071L18.545 12.8805L20.167 14.6614L20.9063 13.9881ZM23.3903 12.0471C23.3903 12.3646 23.1662 12.5405 22.9857 12.5405V13.5405C23.8044 13.5405 24.3903 12.8268 24.3903 12.0471H23.3903ZM24.795 10.5537C23.9762 10.5537 23.3903 11.2674 23.3903 12.0471H24.3903C24.3903 11.7296 24.6145 11.5537 24.795 11.5537V10.5537ZM21.4464 13.9881C21.2914 14.1583 21.0613 14.1583 20.9063 13.9881L20.167 14.6614C20.7186 15.2672 21.6341 15.2672 22.1857 14.6614L21.4464 13.9881ZM26.1043 10.0604C26.1043 10.3779 25.8802 10.5537 25.6997 10.5537V11.5537C26.5184 11.5537 27.1043 10.8401 27.1043 10.0604H26.1043ZM24.3903 21.9807V20.4907H23.3903V21.9807H24.3903ZM24.26 20.154L23.3553 19.1606L22.616 19.834L23.5207 20.8273L24.26 20.154ZM23.4857 19.4973V18.0073H22.4857V19.4973H23.4857ZM23.3553 17.6706L22.4507 16.6772L21.7113 17.3506L22.616 18.3439L23.3553 17.6706ZM22.581 17.0139V16.0205H21.581V17.0139H22.581ZM22.081 16.5205H25.6997V15.5205H22.081V16.5205ZM26.1043 17.0139V17.6761H27.1043V17.0139H26.1043ZM27.8105 19.5006H30.223V18.5006H27.8105V19.5006ZM27.009 18.6695C27.009 19.0835 27.3249 19.5006 27.8105 19.5006V18.5006C27.8814 18.5006 27.9362 18.5332 27.967 18.567C27.9971 18.6 28.009 18.6376 28.009 18.6695H27.009ZM26.9059 18.5073C26.9183 18.5073 26.9389 18.5118 26.9627 18.5379C26.9872 18.5648 27.009 18.61 27.009 18.6695H28.009C28.009 18.0727 27.5581 17.5073 26.9059 17.5073V18.5073ZM26.1043 17.6761C26.1043 18.0901 26.4202 18.5073 26.9059 18.5073V17.5073C26.9767 17.5073 27.0315 17.5398 27.0623 17.5736C27.0924 17.6067 27.1043 17.6442 27.1043 17.6761H26.1043ZM25.6997 16.5205C25.8802 16.5205 26.1043 16.6964 26.1043 17.0139H27.1043C27.1043 16.2342 26.5184 15.5205 25.6997 15.5205V16.5205ZM24.795 21.4807C21.6167 21.4807 18.9623 18.6364 18.9623 15.0272H17.9623C17.9623 19.0986 20.9784 22.4807 24.795 22.4807V21.4807ZM30.6277 15.0272C30.6277 18.6364 27.9733 21.4807 24.795 21.4807V22.4807C28.6116 22.4807 31.6277 19.0986 31.6277 15.0272H30.6277ZM24.795 8.57367C27.9733 8.57367 30.6277 11.418 30.6277 15.0272H31.6277C31.6277 10.9558 28.6116 7.57367 24.795 7.57367V8.57367ZM24.795 7.57367C20.9784 7.57367 17.9623 10.9558 17.9623 15.0272H18.9623C18.9623 11.418 21.6167 8.57367 24.795 8.57367V7.57367Z" fill="black"/>
</svg>
                            </span>
                            Web разработка
                        </h2>

                        <p className={s.choose__content_card_text}>
                            Курс фронтенд разработки: Изучите языки HTML, CSS и JavaScript, а также популярные фреймворки и инструменты, чтобы создавать красивые и интерактивные веб-страницы. Вы научитесь создавать динамические пользовательские интерфейсы и разрабатывать фронтенд часть веб-приложений.
                        </p>

                        <div className={s.choose__content_card_box}>
                            <button className={s.choose__content_card_btn}>
                                Frontend
                            </button>

                            <button className={s.choose__content_card_btn}>
                                Backend
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={4} variants={hiddenAnimation}
                        className={s.choose__content_card}>

                        <h2 className={s.choose__content_card_title}>
                            <span>
<svg width="158" height="93" viewBox="0 0 158 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M154.555 70.8186C154.555 60.6398 146.303 52.3882 136.125 52.3882C125.946 52.3882 117.694 60.6398 117.694 70.8186C117.694 80.9974 125.946 89.249 136.125 89.249C146.303 89.249 154.555 80.9974 154.555 70.8186Z" fill="#FEF4FF"/>
<path d="M132.147 75.3982H132.647V74.8982H132.147V75.3982ZM132.147 78.6078H131.647C131.647 78.7972 131.754 78.9703 131.923 79.055C132.093 79.1397 132.295 79.1215 132.447 79.0079L132.147 78.6078ZM136.429 75.3982V74.8982H136.263L136.13 74.9981L136.429 75.3982ZM133.218 67.4089H132.718V68.4089H133.218V67.4089ZM139.641 68.4089H140.141V67.4089H139.641V68.4089ZM133.218 70.6186H132.718V71.6186H133.218V70.6186ZM137.5 71.6186H138V70.6186H137.5V71.6186ZM131.647 75.3982V78.6078H132.647V75.3982H131.647ZM132.447 79.0079L136.729 75.7983L136.13 74.9981L131.847 78.2077L132.447 79.0079ZM136.429 75.8982H142.853V74.8982H136.429V75.8982ZM142.853 75.8982C143.721 75.8982 144.424 75.1964 144.424 74.3283H143.424C143.424 74.6435 143.169 74.8982 142.853 74.8982V75.8982ZM144.424 74.3283V64.6993H143.424V74.3283H144.424ZM144.424 64.6993C144.424 63.8312 143.721 63.1294 142.853 63.1294V64.1294C143.169 64.1294 143.424 64.3841 143.424 64.6993H144.424ZM142.853 63.1294H130.006V64.1294H142.853V63.1294ZM130.006 63.1294C129.138 63.1294 128.435 63.8312 128.435 64.6993H129.435C129.435 64.3841 129.69 64.1294 130.006 64.1294V63.1294ZM128.435 64.6993V74.3283H129.435V64.6993H128.435ZM128.435 74.3283C128.435 75.1964 129.138 75.8982 130.006 75.8982V74.8982C129.69 74.8982 129.435 74.6435 129.435 74.3283H128.435ZM130.006 75.8982H132.147V74.8982H130.006V75.8982ZM133.218 68.4089H139.641V67.4089H133.218V68.4089ZM133.218 71.6186H137.5V70.6186H133.218V71.6186Z" fill="black"/>
<path d="M157.306 70.6895C157.306 58.9202 147.765 49.3793 135.996 49.3793C124.227 49.3793 114.686 58.9202 114.686 70.6895C114.686 82.4587 124.227 91.9996 135.996 91.9996C147.765 91.9996 157.306 82.4587 157.306 70.6895Z" stroke="#14161D"/>
<path d="M104.434 1H69.6464C67.8015 1 66.3059 2.4956 66.3059 4.34051V39.1279C66.3059 40.9728 67.8015 42.4684 69.6464 42.4684H104.434C106.279 42.4684 107.774 40.9728 107.774 39.1279V4.34051C107.774 2.4956 106.279 1 104.434 1Z" stroke="#14161D"/>
<path d="M39.1279 25.6235H4.34051C2.4956 25.6235 1 27.1191 1 28.964V63.7514C1 65.5963 2.4956 67.0919 4.34051 67.0919H39.1279C40.9728 67.0919 42.4684 65.5963 42.4684 63.7514V28.964C42.4684 27.1191 40.9728 25.6235 39.1279 25.6235Z" stroke="#14161D"/>
<path d="M36.6952 28.8353H7.05774C5.48595 28.8353 4.21176 30.1095 4.21176 31.6813V61.3188C4.21176 62.8906 5.48595 64.1647 7.05774 64.1647H36.6952C38.267 64.1647 39.5412 62.8906 39.5412 61.3188V31.6813C39.5412 30.1095 38.267 28.8353 36.6952 28.8353Z" fill="#FEF4FF"/>
<path d="M69.9922 8.9474C69.9922 6.59349 71.9004 4.68536 74.2542 4.68536H99.8264C102.18 4.68536 104.088 6.59349 104.088 8.9474V23.8645C104.088 26.2178 102.18 28.1265 99.8264 28.1265H74.2542C71.9004 28.1265 69.9922 26.2178 69.9922 23.8645V8.9474Z" fill="#FEF4FF"/>
<path d="M17.8082 40.3976V38.3635C17.8082 37.6146 18.4154 37.0074 19.1643 37.0074H21.1984M27.9788 37.0074H30.0129C30.7619 37.0074 31.369 37.6146 31.369 38.3635V40.3976M22.5545 37.0074H26.6227M27.9788 50.5682H30.0129C30.7619 50.5682 31.369 49.9611 31.369 49.2122V47.178M31.369 41.7537V45.822M15.7741 42.4318H13.74C12.991 42.4318 12.3839 43.0389 12.3839 43.7878V45.822M12.3839 52.6024V54.6365C12.3839 55.3854 12.991 55.9926 13.74 55.9926H15.7741M12.3839 47.178V51.2463M22.5545 55.9926H24.5886C25.3376 55.9926 25.9447 55.3854 25.9447 54.6365V52.6024M17.1302 55.9926H21.1984M17.8082 42.4318V50.5682H25.9447V42.4318H17.8082Z" stroke="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M83.577 36.1194C84.0183 36.1194 84.3761 35.7623 84.3761 35.3211C84.3761 34.88 84.0183 34.5217 83.577 34.5217C83.1356 34.5217 82.7778 34.88 82.7778 35.3211C82.7778 35.7623 83.1356 36.1194 83.577 36.1194ZM86.7735 36.1194C87.2148 36.1194 87.5726 35.7623 87.5726 35.3211C87.5726 34.88 87.2148 34.5217 86.7735 34.5217C86.3321 34.5217 85.9744 34.88 85.9744 35.3211C85.9744 35.7623 86.3321 36.1194 86.7735 36.1194ZM90.7691 35.3211C90.7691 35.7623 90.4114 36.1194 89.9701 36.1194C89.5287 36.1194 89.1709 35.7623 89.1709 35.3211C89.1709 34.88 89.5287 34.5217 89.9701 34.5217C90.4114 34.5217 90.7691 34.88 90.7691 35.3211Z" fill="#7F7ADA"/>
<path d="M94.4985 11.0797L99.826 16.5371L94.4985 21.7347" stroke="#3980FF" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M79.5816 11.0797L74.2542 16.5371L79.5816 21.7347" stroke="#3980FF" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M86.4642 49.9554C86.5967 61.57 84.4483 78.3843 107.268 78.6434" stroke="#7F7ADA" strokeLinecap="round" strokeDasharray="2 3"/>
<path d="M23.4864 20.2706C23.6159 15.0693 21.5156 7.53957 43.8235 7.42351H57.7412" stroke="#3980FF" strokeLinecap="round" strokeDasharray="2 3"/>
</svg>
                            </span>
                            Дизайн веб разработки и <br/>
                            мобильных приложений
                        </h2>

                        <p className={s.choose__content_card_text}>
                            Курс фронтенд разработки: Изучите языки HTML, CSS и JavaScript, а также популярные фреймворки и инструменты, чтобы создавать красивые и интерактивные веб-страницы. Вы научитесь создавать динамические пользовательские интерфейсы и разрабатывать фронтенд часть веб-приложений.
                        </p>

                        <div className={s.choose__content_card_box}>
                            <button className={s.choose__content_card_btn}>
                                Дизайн
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.section>
    );
};

export default Choose;