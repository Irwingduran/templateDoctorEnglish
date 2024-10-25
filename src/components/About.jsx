import React, { useState } from 'react';
import aboutImg from '../../public/trash/image3.jpg';
import Modal from './ModalAbout'; 

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const modalContent = (
    <div>
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p>
      In the field of modern urology, few names resonate as strongly as that of Dr. Bruno, founder of the Prostate and Urinary Tract Center in Puebla, Mexico. 
        Recognized for his expertise and skill in prostate laser surgery on an international level. 
        Dr. Bruno has adopted and perfected this cutting-edge technology, being recognized in Latin America by Forbes Mexico magazine. 
        His mastery of the technology allows him to provide his patients with first class care at a decent price and with exceptional results. 
        He receives patients from all over Mexico and other countries such as the United States, Ecuador, Colombia, Brazil, Guatemala, Panama, among others in Central America.
      </p>
    </div>
  );

  return (
    <div>
      {/*  about text  */}
      <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8' id='about'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2 text-center'>About</h2>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={aboutImg} width="600px" alt="" />
          </div>
          <div className='md:w-3/4 mx-auto'>
            <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5'>Dr. Bruno: International Expert in Prostate Laser Surgery (HoLEP)</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
            In the field of modern urology, few names resonate as strongly as that of Dr. Bruno, founder of the Prostate and Urinary Tract Center in Puebla, Mexico. 
            Recognized for his expertise and skill in prostate laser surgery on an international level.
            </p>
            <button className='btn-primary' onClick={openModal}>See more</button>
          </div>
        </div>
      </div>

      {/*  stats  */}
      <div className='px-4 lg:px-14 mx-w-screen-2x1 mx-auto bg-colorDark py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
          
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>
            Trajectory
            </h2>
            <div className='flex items-center gap-4'>
                   <img src="/trash/tec.png" width="40px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Tecnológico de Monterrey Campus Monterrey</h4>
                  <p>Considerada la escuela más exclusiva y prestigiosa del país donde se graduó con mención honorífica.</p>
                </div>
              </div><div className='flex items-center gap-4'>
                   <img src="/logos/icon1.png" width="40px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Especialidad en Cirugía General</h4>
                  <p>En el hospital mas grande del Estado de México.</p>
                </div>
              </div><div className='flex items-center gap-4'>
                   <img src="/logos/icon1.png" width="40px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Sub especialidad en Urología</h4>
                  <p></p>
                </div>
              </div>
          </div>

          {/*  stats  */}        
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-8'>
            <div className='flex items-center gap-4'>
                <img src="/logos/icon4.png"  width="40px" alt="" />
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Alta Especialidad en Cirugia Láser de Próstata</h4>
                  <p>Considerado el maximo rango academico que un cirujano puede llegar a adquirir en su vida.</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <img src="/logos/icon2.png" width="40px" alt="" />
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Cirujano Robótico Certificado (Da Vinci)</h4>
                  <p>Certificado por Intitutive en Houston TX, USA (logo de un robot Davinci)                   </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                   <img src="/logos/icon1.png" width="40px" alt="" /> 
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>International Certificate of Holmium Laser</h4>
                  <p>Treatment for benign prostatic hyperplasia- Hill Clinic, Solfia Bulgaria
                  </p>
                </div>
              </div>
            
             
             
            </div>
          </div>
        </div>
      </div>

      <Modal showModal={showModal} closeModal={closeModal} content={modalContent} />
    </div>
  )
}

export default About;