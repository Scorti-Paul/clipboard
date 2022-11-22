import iconFacebook from './../assets/icon-facebook.svg'
import iconInstagram from './../assets/icon-instagram.svg'
import iconPreview from './../assets/icon-preview.svg'
import iconText from './../assets/icon-text.svg'
import iconBlacklist from './../assets/icon-blacklist.svg'
import iconTwitter from './../assets/icon-twitter.svg'
import computer from './../assets/image-computer.png'
import devices from './../assets/image-devices.png'
import google from './../assets/logo-google.png'
import hp from './../assets/logo-hp.png'
import ibm from './../assets/logo-ibm.png'
import microsoft from './../assets/logo-microsoft.png'
import vectorGraphics from './../assets/logo-vector-graphics.png'
import logo from './../assets/logo.svg'
import Button from './Button'



const Home = () => {

  const btnBGColorCyan = ' bg-strongCyan shadow-2xl hover:bg-strongCyan/80'
  const btnBGColorBlue = 'bg-lightBlue hover:bg-lightBlue/80 shadow-3xl'

  return (
    <div>
      <header className={window.innerWidth <= 785 ? `w-full bg-heroMobileBgImage bg-cover bg-no-repeat bg-center pb-[12rem]` : `w-full bg-heroDesktopBgImage bg-cover bg-no-repeat bg-center pb-[10rem]`}>
        <div className='pt-[9rem] px-8'>
          <div className='flex justify-center mb-16'>
            <img className='w-2/5 md:w-[7rem]' src={logo} alt="site logo" />
          </div>
          <div className='md:flex md:flex-col md:items-center'>
            <h1>A history of everything you copy</h1>
            <p className='md:max-w-[38rem] text-center'>Clipboard allows you to track and organize everything you
              copy. Instantly access your clipboard on all your devices.
            </p>
          </div>
          <div className='flex flex-col md:flex-row md:justify-center gap-8 mt-12'>
            <Button textColor={btnBGColorCyan}>Download for iOS</Button>
            <Button textColor={btnBGColorBlue}>Download for Mac</Button>
          </div>
        </div>
      </header>
      <main>
        <section className='pb-[8rem] pt-4 px-8'>
          <div className='md:flex md:flex-col md:items-center'>
            <h2>Keep track of your snippets</h2>
            <p className='md:w-[68%] text-lg text-center'>Clipboard instantly stores any item you copy in the cloud,
              meaning you can access your snippets immediately on all your
              devices. Our Mac and iOS apps will help you organize everything.
            </p>
          </div>
          <div className='pt-[5rem] md:flex md:items-center md:gap-6'>
            <div className='md:ml-[-5rem] flex justify-center md:w-[70%]'>
              <img className='md:w-full' src={computer} alt="" />
            </div>
            <div className='pt-16 md:pt-0 md:w-[30%]'>
              <div className='px-2'>
                <h2 className='mb-[-0.7rem] md:text-left md:text-lg'>Quick Search</h2>
                <p className='md:text-left md:text-[1rem]'>Easily search your snippets by content, category, web address, application, and more.
                </p>
              </div>
              <div className='pt-12 px-6'>
                <h2 className='mb-[-0.7rem] md:text-left md:text-lg'>iCloud Sync</h2>
                <p className='md:text-left md:text-[1rem]'>Instantly saves and syncs snippets across all your devices.</p>
              </div>
              <div className='pt-12 px-6'>
                <h2 className='mb-[-0.7rem] md:text-left md:text-lg'>Complete History</h2>
                <p className='md:text-left md:text-[1rem]'>Retrieve any snippets from the first moment you started using the app.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='pt-16 px-8 md:flex md:flex-col md:items-center'>
          <h2>Access Clipboard Anywhere</h2>
          <p className='md:w-[68%] text-lg text-center'>Whether you’re on the go, or at your computer, you can access all your Clipboard
            snippets in a few simple clicks.</p>
          <div className='pt-[5rem]'>
            <div className='flex justify-center '>
              <img className='w-3/4' src={devices} alt="" />
            </div>
            <div className='pt-[8rem] '>
              <div className='pb-16'>
                <h2 className='text-[2rem] leading-10 mb-[-0.3rem]'>Supercharge your workflow</h2>
                <p>We’ve got the tools to boost your productivity.</p>
              </div>
              <div className='flex flex-col items-center md:flex-row md:justify-center md:items-center md:gap-9'>
                <div className='pt-10 pb-6 flex flex-col items-center '>
                  <img className='w-3/8 mb-10' src={iconBlacklist} alt="" />
                  <h2>Create blacklists</h2>
                  <p className='md:max-w-[24rem]'>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                </div>
                <div className='pt-10 pb-6 flex flex-col items-center '>
                  <img className='w-3/8 mb-10' src={iconText} alt="" />
                  <h2>Plain text snippets</h2>
                  <p className='md:max-w-[24rem]'>Remove unwanted formatting from copied text for a consistent look.
                  </p>
                </div>
                <div className='pt-10 md:pb-6  flex flex-col items-center '>
                  <img className='w-3/8 mb-10' src={iconPreview} alt="" />
                  <h2>Sneak preview</h2>
                  <p className='md:max-w-[24rem]'>Quick preview of all snippets on your Clipboard for easy access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='pt-[8rem] px-8 md:px-[6rem] lg:px-0 lg:gap-28 flex flex-col items-center justify-center  md:flex-row md:gap-12 '>
          <div className='pb-16'>
            <img src={google} alt="google logo" />
          </div>
          <div className='pb-16'>
            <img src={ibm} alt="ibm logo" />
          </div>
          <div className='pb-16'>
            <img src={microsoft} alt="microsoft logo" />
          </div>
          <div className='pb-16'>
            <img src={hp} alt="hp logo" />
          </div>
          <div className='pb-16'>
            <img src={vectorGraphics} alt="vectorGraphics logo" />
          </div>
        </section>


        <section className='pt-[8rem] px-9 md:flex md:flex-col md:items-center'>
          <h2 className='px-2'>Clipboard for iOS and Mac OS</h2>
          <p className='pb-16 md:max-w-[44rem]'>Available for free on the App Store. Download for Mac or iOS, sync with iCloud
            and you’re ready to start adding to your clipboard. </p>
          <div className='flex flex-col md:flex-row md:justify-center gap-8 mt-12'>
            <Button textColor={btnBGColorCyan}>Download for iOS</Button>
            <Button textColor={btnBGColorBlue}>Download for Mac</Button>
          </div>
        </section>
      </main>


      <footer className='bg-grayishBlue/10 pt-[4rem] md:pt-8 md:pb-8 mt-[12rem]'>
        <div className='px-8 md:px-[8rem] md:flex md:items-center'>
          <div className='flex md:block justify-center md:w-[15%]'>
            <img className='w-2/12 md:w-1/3' src={logo} alt="site logo" />
          </div>


          <div className='flex flex-col justify-center md:justify-start md:w-[70%] md:ml-10 md:flex-row md:items-start md:gap-12 pt-12'>
            <ul>
              <li className='text-center md:text-left'>
                <a className='text-darkGrayishBlue/60 text-[1.3rem] md:text-[1rem] font-bold' href="/">FAQs</a>
              </li>
              <li className='text-center py-6'>
                <a className='text-darkGrayishBlue/60 text-[1.3rem] md:text-[1rem] font-bold' href="/">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li className='text-center md:text-left'>
                <a className='text-darkGrayishBlue/60 text-[1.3rem] md:text-[1rem] font-bold' href="/">Privacy Policy</a>
              </li>
              <li className='text-center py-6 md:text-left'>
                <a className='text-darkGrayishBlue/60 text-[1.3rem] md:text-[1rem] font-bold' href="/">Press Kit</a>
              </li>
            </ul>
            <ul>
              <li className='text-center md:text-left'>
                <a className='text-darkGrayishBlue/60 text-[1.3rem] md:text-[1rem] font-bold' href="/">Install Guide</a>
              </li>
            </ul>
          </div>

          <div className='flex justify-center md:w-[15%] gap-8 py-14'>
            <img className='md:w-[1.26rem]' src={iconFacebook} alt="" />
            <img className='md:w-[1.26rem]' src={iconTwitter} alt="" />
            <img className='md:w-[1.26rem]' src={iconInstagram} alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;