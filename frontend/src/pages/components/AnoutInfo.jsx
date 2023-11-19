import React, { useState } from 'react';

import Yandex from '../../assets/img/yandex.svg';
import Fontbase from '../../assets/img/fontbase.svg';
import Picular from '../../assets/img/picular.svg';
import Codebeautify from '../../assets/img/codebeautify.svg';
import Whatfont from '../../assets/img/whatfont.svg';
import Colorbyfardos from '../../assets/img/colorbyfardos.svg';

const AnoutInfo = () => {
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setIsHovered(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

    return (
        <section className='flex flex-col gap-[200px] pt-[400px] pb-[200px]'>
            <div className="text-center flex flex-col items-center justify-center">
                <h1 className='text-pink-500 aboute__title'>Миссия</h1>
                <p className='aboute__text'>Показывать привычные вещи с другой стороны и генерировать для них новые смыслы</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center">
                <h1 className='text-purple-400 aboute__title'>Целевая аудитория</h1>
                <p className='aboute__text'>Люди в возрасте от 0 лет любой религии, пола, политических взглядов и социального статуса</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center">
                <h1 className='text-orange-300 aboute__title'>Философия</h1>
                <p className='aboute__text'>У дизайна есть всего 3 метрики: выполнение задачи, уникальность и запоминаемость</p>
            </div>

            <div className="text-center flex flex-col items-center justify-center">
                <h1 className='text-emerald-500 aboute__title'>Плюшки</h1>
                <p className='aboute__text'>Здесь собраны разные ресурсы, сервисы и приложения, которые мы используем в работе</p>
                <div className="flex flex-wrap items-center justify-center pt-[48px] gap-[18px]">
                    <a className="aboute__plus w-full md:w-1/2 lg:w-1/3 p-2"
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                        href="https://clck.ru/?"
                        style={{background: isHovered === 0 ? '#BA93DF' : ''}}>
                            {isHovered === 0 ? 'Яндекс Кликер — сервис сокращения ссылок' : <img src={ Yandex } alt="Link 1"/>}
                    </a>

                    <a className="aboute__plus w-full md:w-1/2 lg:w-1/3 p-2"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                        href="https://fontba.se/"
                        style={{background: isHovered === 1 ? '#BA93DF' : ''}}>
                            {isHovered === 1 ? 'FontBase — менеджер шрифтов' : <img src={ Fontbase } alt="Link 2"/>}
                    </a>

                    <a className="aboute__plus w-full md:w-1/2 lg:w-1/3 p-2"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                        href="https://picular.co/"
                        style={{background: isHovered === 2 ? '#BA93DF' : ''}}>
                            {isHovered === 2 ? 'Picular — цветовой поисковик' : <img src={ Picular } alt="Link 3"/>}
                    </a>

                    <a className="aboute__plus w-full md:w-1/2 lg:w-1/3 p-2"
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}
                        href="https://clck.ru/36cg5J"
                        style={{background: isHovered === 3 ? '#BA93DF' : ''}}>
                            {isHovered === 3 ? 'Code Beautify — конвертер цветовых кодов' : <img src={ Codebeautify } alt="Link 4"/>}
                    </a>

                    <a className="aboute__plus w-full md:w-1/2 lg:w-1/3 p-2"
                        onMouseEnter={() => handleMouseEnter(4)}
                        onMouseLeave={handleMouseLeave}
                        href="https://clck.ru/36cg5f"
                        style={{background: isHovered === 4 ? '#BA93DF' : ''}}>
                            {isHovered === 4 ? 'WhatFont — расширение, показывающее шрифты на сайтах' : <img src={ Whatfont } alt="Link 5"/>}
                    </a>

                    <a className="aboute__plus w-full md:w-1/2 lg:w-1/3 p-2"
                        onMouseEnter={() => handleMouseEnter(5)}
                        onMouseLeave={handleMouseLeave}
                        href="https://clck.ru/36cg4e"
                        style={{background: isHovered === 5 ? '#BA93DF' : ''}}>
                            {isHovered === 5 ? 'Color by Fardos — расширение, показывающее цвета на сайтах' : <img src={ Colorbyfardos } alt="Link 6"/>}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AnoutInfo;