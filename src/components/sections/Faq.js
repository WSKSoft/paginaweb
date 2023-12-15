import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';

const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    background-color: ${(props) => props.theme.text};
    position: relative;
    color: ${(props) => props.theme.body};
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: uppercase;
    color: ${(props) => props.theme.body};

    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.carouselColor};
    width: fit-content;

    @media (max-width: 48em) {
        font-size: ${(props) => props.theme.fontxl};
    }
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-content: center;

    @media (max-width: 64em) {
        width: 80%;
    }
    @media (max-width: 48em) {
        width: 90%;
        flex-direction: column;

        & > *:last-child {
            & > *:first-child {
                margin-top: 0;
            }
        }
    }
`;
const Box = styled.div`
    width: 45%;
    @media (max-width: 64em) {
        width: 90%;
        align-self: center;
    }
`;

const Faq = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;

        ScrollTrigger.create({
            trigger: element,
            start: 'bottom bottom',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: 1,
            // markers:true,
        });

        return () => {
            ScrollTrigger.kill();
        };
    }, []);

    return (
        <Section ref={ref} id="faq">
            <Title>Faq</Title>

            <Container>
                <Box>
                    <Accordion
                        ScrollTrigger={ScrollTrigger}
                        title="¿QUÉ SERVICIOS OFRECE WSKSOFT EN DESARROLLO WEB?"
                    >
                        WSKSoft ofrece una amplia gama de servicios de
                        desarrollo web personalizados. Esto incluye la creación
                        de sitios web corporativos, tiendas en línea,
                        plataformas personalizadas y más. Nuestro enfoque es
                        diseñar soluciones web atractivas y funcionales que se
                        adapten a tus necesidades específicas.
                    </Accordion>
                    <Accordion
                        ScrollTrigger={ScrollTrigger}
                        title="¿EN QUÉ CONSISTE EL DESARROLLO DE APLICACIONES MÓVILES?"
                    >
                        El desarrollo de aplicaciones móviles en WSKSoft se
                        centra en la creación de aplicaciones de alta calidad
                        para dispositivos móviles. Desde aplicaciones iOS hasta
                        Android, creamos soluciones que conectan a tu audiencia
                        en el mundo móvil.
                    </Accordion>
                    <Accordion
                        ScrollTrigger={ScrollTrigger}
                        title="¿CÓMO PUEDE WSKSOFT AYUDAR EN MI ESTRATEGIA DE MARKETING DIGITAL?"
                    >
                        Nuestro equipo de expertos en marketing digital puede
                        optimizar tu presencia en línea. Desde SEO y SEM hasta
                        estrategias en redes sociales, maximizamos tu
                        visibilidad y te ayudamos a conectar con tu audiencia
                        objetivo.
                    </Accordion>
                </Box>
                <Box>
                    <Accordion
                        ScrollTrigger={ScrollTrigger}
                        title="¿POR QUÉ DEBERÍA CONFIAR EN WSKSOFT PARA MIS PROYECTOS DE DESARROLLO TECNOLÓGICO?"
                    >
                        WSKSoft se enorgullece de ser una empresa en constante
                        crecimiento. Cada cliente es fundamental para nosotros,
                        y creemos que tu éxito es nuestro éxito. Estamos
                        comprometidos al 100% en cumplir tus objetivos y superar
                        tus expectativas en el desarrollo tecnológico.
                    </Accordion>
                    <Accordion
                        ScrollTrigger={ScrollTrigger}
                        title="¿CÓMO PUEDO CONTACTAR A WSKSOFT PARA OBTENER MÁS INFORMACIÓN O SOLICITAR UN PRESUPUESTO?"
                    >
                        Para ponerte en contacto con WSKSoft, puedes utilizar
                        nuestro formulario de contacto en línea o enviarnos un
                        correo electrónico a wsksoft2023@gmail.com. Estamos
                        disponibles para responder a tus consultas en cualquier
                        momento.
                    </Accordion>
                    <Accordion
                        ScrollTrigger={ScrollTrigger}
                        title="¿QUÉ NOS DIFERENCIA DE OTRAS EMPRESAS TECNOLÓGICAS?"
                    >
                        Lo que nos diferencia es nuestro enfoque en la
                        satisfacción del cliente, la innovación constante y la
                        experiencia en la creación de soluciones tecnológicas
                        personalizadas. En WSKSoft, tu éxito es nuestra
                        prioridad.
                    </Accordion>
                </Box>
            </Container>
        </Section>
    );
};

export default Faq;
