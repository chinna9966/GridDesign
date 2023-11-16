import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_1">
        <div className="footer_col">
          <h2>EDYODA</h2>
          <div className="footer_col links">
            <a href="#file">
              1st Floor,
              <br />
              Gopalan Millenium Tower,
              <br />
              ITPL Main Road, Brookefield,
              <br />
              Bengaluru, Karnataka - 563007 <br />
              India
            </a>

            <br />

            <a
              href="mailto:hello@edyoda.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.edyoda.com/static/media/email-white.e7d51381.svg"
                type="image/svg"
                alt="Edyoda_Mail"
                height="20px"
                width="20px"
                style={{
                  marginRight: "10px"
                }}
              />
              hello@edyoda.com
            </a>
            <div className="social_media_links">
              <a
                href="https://www.google.com/maps/place/zekeLabs/@12.9671441,77.7143744,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae12256340d8a7:0xc9c6dfb48a7eeadd!8m2!3d12.9671441!4d77.7165631"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.edyoda.com/static/media/location-pin.de95721a.svg"
                  height="20px"
                  width="20px"
                  alt="pic"
                />
              </a>

              <a
                href="https://twitter.com/EdYodaHQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.edyoda.com/static/media/twitter-white-icon.ea27ab22.svg"
                  alt="pic_"
                  height="20px"
                  width="20px"
                />
              </a>

              <a
                href="https://en-gb.facebook.com/edYoda.here/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAqCAYAAAC+5wuXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMlJREFUeNpi/P//PwMewAzEPkDsBcRWQKwIxNxYVYIMwoG1gPjCfyIBCw6XqAPxQSAWYSASMGERYwTiBaQYgssgWyC2YCARYDMolIEMgM0gc3IMwhbYSgT0XATiTiB+AsTf4AGLJR39AmJWPAZpAvENjBjCYtB/Ai4CJdJ/xIQRIfCP2MBmoFas4QPf8MWaCwkG/celHhTY/6ngs/fUCqMX1DLoGbUMej6MvcYCLRGJzWsfgVhgUGWRUYNGDRo1aNSgUYNIBgABBgDTamTg3XAChAAAAABJRU5ErkJggg=="
                  alt="pic3"
                  height="20px"
                  width="15px"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/edyoda/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACE1BMVEUAAAD//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f0AAACS7nrlAAAAr3RSTlMAARIiEydtsub757RvKUO+wEIauRXp4zb68i0q7+AWAs+oX/4z4bM3+Q2FVb+R2LDxzvXV3b3EpJJxRyMH8NN7VgrJTP3zd4JaTtoUifTiamucBiU7UVsyGwwdL0BKIQtUjsj435dQJGAOaXkxEJ2D97w8sURn/GK7gZumBLp6Qbjlt262tQPGOJ6KhqDRD+oZra+WkK6HzKwomaua9o2qgJ+pOcPkp9KlfaNwoqER3P6g3gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwQRLRRI/vG6AAADvElEQVR42u3a+TsUYQAH8HfLteQuqWRJISo3hRK2U22HDhRJCB1CETolXZJSoUv3Xe+/WPJsz66d9zvzjnnfeR6735/fd76fPWfmnZcQX1xjWbDQz2JWuX9AYJCVUmoNDlkUKr8+LJy6JiJSbn2Ue/10ohfLfPlLqGdilkrrj4ylSlm2XFL/ijiqnJXxUvptCZSVRCmAVcx+mrRaQr9lDRtAkyUAUkA/TV0rHpCGADRdPGAdBKwXD9gAARniAZkQkCUekA0BOeIBuRCQJx6QDwEF4gEbIWCTeEAhBBSJBxRvBv1bxPcTUgIAW2UASoOY/WVyrpDL7Yz+bbIuibYr99vLJfUTsiNJoT97p7R+QnZ5/hR2y3r/Z1KxZ69bvWNfsdT+v4nfn+w8LzkOpB+UXf8vxZWHDh8pPFplSrkvvvjii5BU1xw7XptSd8KM7qj6kw2n/p9YG8uampn3uadb2Jl1Sihkj3RbVWtty/I8vcdGnDmrCGgB14Tn3IeCG1mXm8i688y7rYbIuQHCNQBK2y+AA9KOlLkA8tQBnQ6qki5/kYBm+PJnknlRN6BDDXCpW72fUmuPXsBlFUCvlvrppFlEAGx9Wvsp7b+iC3AVAq5p76e0XRcgGgE6NX3+ztiv6wHcAAC/GJ5+Sm9WGAvoCuHrpzRQB2CAPTKOcucWP2CQvwUks5UbcNtQgHMByjxA4xAvgPuLppJ6XkCywYA7ZgPoXU5AoNGAe5yALm2HdQze7wl4MPxQfWQuJyBDQ3tC7YhzeGjvI7XRo0YDgntsrhPiH6uMr+cDPFHrH6smsxKAJzzlAzxT6e8jnnkOZ4zzAVTe0IkhBYAFfnO7qw0ERCiv7FVa0aQwLsAEfDGTRDkv0Kw2LsBLdKhXjH5ShGaVGAZ4HcUCEPSP9IYLMAWGjjH7yVsw7R0X4D0YCp4yfwDTurgAiWDoKBtQBaZ9NArwid1PhuzseTlcgM/skV8AgLCfStFgLkA/e2Q+Aoyz56UaBRhAAPRvzAX4yh4JNxo0GQUo0An4ZhTgu07Aj3kD+Gk24JfZgGEfwGyA6d8B038Fpv8PmA7Qey4wDKD3bGgYAFwPyAGASzI5AHBR6iUAcGMiBzBlNgDcnMoBgPUBOQCwQuIlALBKJgcA1gnlADLMBoCbTDkAsFzvJQDwxEQOADy0kgMAj+3kAMCTUzkA8OzYSwBo/4AUANxBIQOA95BIAKht4xEOUN3INO8BGjaziQWEmw3QtqGRFzAyyY7N/UA17JFwS/5vUEG8Pn8AAeaBBm01AhgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMDRUMTc6NDU6MjArMDE6MDDpm7GmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTA0VDE3OjQ1OjIwKzAxOjAwmMYJGgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                  alt="pic_"
                  height="20px"
                  width="20px"
                />
              </a>

              <a
                href="https://t.me/interviewspreparation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.edyoda.com/static/media/telegram-white-icon.4aa9601b.svg"
                  height="20px"
                  width="20px"
                  alt="pic1"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="links footer_col col">
          <h3>EDYODA</h3>

          <a href="https://www.edyoda.com/about">About us</a>

          <a
            href="https://zekelabs.kekahire.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Careers
          </a>

          <a href="https://www.edyoda.com/contact-us">Contact Us</a>

          <a href="https://www.edyoda.com/terms">Terms of Use</a>

          <a href="https://www.edyoda.com/privacy">Privacy Policy</a>
        </div>

        <div className="links footer_col col">
          <h3>RESOURCES</h3>
          <a href="https://www.edyoda.com/learning-path/1">Learning Paths</a>
          <a href="https://www.edyoda.com/courses/all">Courses</a>
          <a href="https://www.edyoda.com/videos/all">Learning Videos</a>

          <a href="https://www.edyoda.com/channel/all">Educators</a>

          <a href="https://www.edyoda.com/stories">Edyoda Stories</a>

          <a
            href="https://university.edyoda.com/?utm_source=UniversityFooter&amp;utm_medium=UniversityFooter&amp;utm_campaign=UniversityFooter&amp;utm_id=UniversityFooter"
            target="_blank"
            rel="noopener noreferrer"
          >
            University
          </a>
        </div>

        <div className="links footer_col col">
          <h3>FOR ENTERPRISES</h3>
          <a
            href="https://www.zekelabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Train Your Employees
          </a>

          <h3>QUICK LINKS</h3>

          <a href="https://www.edyoda.com/learn-and-earn">Learn and Earn</a>

          <a href="https://www.edyoda.com/become-learning-enabler">
            Become a Learning-Enabler
          </a>

          <a href="https://www.edyoda.com/learning-enabler-tips">
            Tips for Learning-Enabler
          </a>

          <a href="https://www.edyoda.com/requestnewtopic">Request New Topic</a>

          <a href="https://www.edyoda.com/certification">Certification</a>

          <a href="https://www.edyoda.com/affiliate-program">
            Affiliate Program
          </a>
        </div>
      </div>
      <div className="footer_2">
        <img
          src="data:image/png;base64,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"
          alt="icon"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAaCAYAAADSbo4CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMwSURBVHgB3VfNThRBEP5qZneB3UUHTRSVyBI9GC/gwfsQH0CMDwAbTp7AJwCeADwbw+4TCE8AHjx4Ww4mHjQZEkESFGeB5W9nuq1aemGW/048GL+k6O6q/rq+me5pagnnYB3dPuA+J+ghDSqIj4BQAxXuzkeI5+5gLWjO17OetxN3+C7RsCYMwHB4fkjC0SjjIF7seHXMSYLOETDBXR+XgMmlOuKpzneu7xCmeexdQglAutRRXJ06Y61j/ELPmIKegQU6n4UhXuY93Z6yoS22U+0FFZlr4ByLuDthKyL3tIq2npqXWfoJ2otsqP6+zi3IdrYI+YHuggJNwgLZ/i10PN5u9GkvRubzhg1dzs7ALnITLULScBcs1oCbj1jEVouPtutIBZuwAWmMb73t8RtC5HCyuoIFH20PdkAZfcqfWqnBFmlHjTWEENxhWCJzf/fsQKTghPuwApEvZ8WRvbLiZRRSN84/mA5vkQ04v1dDuiBnxEpIquviRFSzE9KAygw4+EcgQkIbQly75OJy7Z+NtAqFVbEh6QO6MK7yadhCu1HAQvQHK9KBg/pa27lx5bXBUkaQL65XnBQyVte6YP9b9ky/up6BbndhA6WdsrROFwL+N01vbMh7X7NQ26cTRoVrsIMOnIOo1BAif1ykJjU7LVbA5sLNlnF8L2+/LZqmmvVJQ4i8lRhq0EZMtJHG9seuQxG3s6g/vA4bKBExulJqjo++Nam2bMXIFu188Ur1R96VOVKxaY3XudHvk0l/y0cvYm5htY8nF68gaJFvgMHcp7AIUoMKKOvL7iRCifbjJ9nRlZnToQuwjh5fQfkuqFfGnKzKhCBCmuvVIDg5/7Bu7fRB8YDjHHL46atKo5JzanPJiuz/gtZ6HH8BvM5ss58yDp8bqUsKbEts/WxFNinlpK6U21c+iz62ksxljmf6Moea/gS/mojLlshdNc1WNnk8JAqy5GEtm4RCXmYbYZtnmzIkSabNoktEjRp3xCREQnDjdw/Hx028aNaReMB+Wb/XxJdOCgkT7W/TvjdPOJKIV82CFX4jcvLnjF+SB2ae9IdMvGTewnCCL1jmuMSOLp8/pEY9vPoo3VsAAAAASUVORK5CYII="
          alt="icon"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMUSURBVHgB5VfPTxNBFP5moCBBaDEiCYS49eDBCFQlXIxSE29e9OLVcvQE/AVs7yZCPJh4Aa9oBBO5aVguHtTEIjEmmMgSw0EB2aqkBdsd32yntW22Swe9+SWP2XmP9/bbNz/eK0MNvDUiEQ4kONgwA2ICMJTJIUkJiId5wDpnO3bJaXotgoybQAMfplkM5T4MKeTcp2B8Hrejtt87mZ9yxTg2AYgxeozgQDCzz/6WxIP1UQjXrMuHYQZ5JKtJVZChbBghsDlR+Kq6sNfYiicXk869wcuRH02N0IANF1fKCbEqIotly1EXHl+6g+12A9+JyNypbvwNIV7UhsAndIm8PDPiEZFo38/h6uev0IRBDBa9vVYk886IJGhDJjSCeCRWotcqdD27WQxspaEJA1l3rESGTswENPHm9E1f/dCXHWiD81GZHU57Jaa7PPuhVthdQ7625ryLnp8ZaCKCbP46p9TEoYmtNiPQfjy7D20wFuOo6y6pxHbYCLR3Zg5BBsyQZAxoQt4t/x4sLMnY0ERbJvgI7zVw6EOkOTsUmc1A++aRJuhzESlOxW4emujefo/m3G5N+8bRFuiDW5yqLlVhYUETZz8t+Oo3Wo/olgQJm0qC5S1uDhiHJvrtBd/sPO89AW24VMGhbmDKTsqF0CLU9GsX51cfVehedXXoZ0W4U5SVmRIZiQHbmSRLEhroX3uGCx9nvecPHW0eGS3IhquZm8VpxRnssx1Tl9Dg6ixa0q/nX/R2Ojp+XkZC1D6MRJ0/3Hwge5sGwGRgtxAc0aI/SfoIC/fXDJqb4Af4CFgkssuzqk0syE+RiqseOKwc0vSckldC4SRWQZLi1CkKN06JD5f0LpbJuWb/+39ACJEgOQlNNAYEXKRhmUQGXUfhppY/QTrUeINENmWy6o+Q3EVh2elUQu6bGMUwaZwjmVJxoiQ7jDHfQxJU0dLkJNtBR70gLokona3mkojsM2NqFMp3SZKj/5W+No3yQ+LKl9XKWhAZu0hKjTKwQ4EmFYnympZS9nSZ77h6aVG3RPNp6Uuk1v1e+BuHCBdPAgXe4wAAAABJRU5ErkJggg=="
          alt="icon"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAaCAYAAAAjZdWPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUoSURBVHgB7VdfSJtXFP8l+ZJqaqJ2Vmv8nzbRxDRqa0Fm5xgtDAbDp8FeutF1D6N76FOhY2yUbjAYbDjWPextsJe1MhkdVAqdls3+mc5/S0xITEyiUayLWjUxJvHP7jkxUSnU2IeC0B98nHvvd797zj33nN+5n2xDAPsL9+TYh3hp9IuCtL0zOxvCxEQQkiShpqaG5bMwPz+PQCAAuVzO85eXI/D7A9grKisrkZeXh6WlJTidDh47ftyK7OxsbMSXIVOpEY4tI+eA+mmjOzs70d//D/R6PSwWy67Kurr+QE/PX9DpSmC1WnHnTqcY68JeYTAYcfHix7DZ/kV7+02oVCqh/zggOGKx4ypy3/0al25/hx9bL0OSS1vhQSQSCPi5XVVVlZEyn29sx3yvd0ycjiLjJ4X8/HyWLpeLZUVFJdRqNRL+fsSGfsekowu/2O7itushv097OhgMIhQKcdtkqsVumJmZwdTUFLfNZjPLCxcuIFMGnZ9/gra2b7ldV1ePRCIhQnOc+waDgWVstEd4cx3D7Z9iA9n46s+f8aaxactor9fDUq3OzsjTPp+PDVQoJBiN1Tym0WiRKbxeL0vKBwrH8fFxzhECh4ZA3P2A5YnlOVizCjE87UHbgxtbRo+MjLCsqtLzQrvB4bCzPHbsKCeszWYTSucgk8nEs+vn6O3tZanXH0VWVlY61HJzc3HkyBFsRBexOmlLbkw8lxMLOHegAD/83ZE0OhZbwdhYcud1dQ27KlxfX4fb7eZ2ba0Fq6uruHXrt3R47QWp0HI6nSwrKip447HR+6QoPe+1tRj06wl4I0+SRgcC42wIIZPQoKNcWVnhNnkqGJxIGyzLxM2bKC8vR319g6DKZUGVPh5raDjBMubs3jH3e6UGY3IlTpdbk0YPDw/xi6KiIhQUFOyqzOFIhpJWm4uSkhJ0dycVHDyYg2vXvsgovLZjZMS+zWl6Tr7E+DD3Ka2vC4O/UWpx6dV38OXZj5JGezyjPMFkMmekJEVNZrMprTSpsGrPBhOGhpJO0+l0HNOrwRGshfxYE2NXVPlol9T47I3z+KTlHM+TQqH/mL4IdMw3b954pgLySIqazGYLotGto21sbMTzIMVcFouVZdzXC5l0AI/qW/Gr8yE+f/19XNk0mI12udzpjsfj4ScTKJVKlJWVCYOFR9bWOJapKOwVjx9Pp6nOaEzy8+qEHbnvXcdddy/a3rqEDxvf3vGNRMmQ4tlMQblWXW3i+wKVXvqe2vTsFZTAxMsqlVIkZgXHs7rlA0iltTifU4jGkpqn9e/HnwCJyifd1Ig14vE437Smp6c5ITQaDReMaHSFvWgymTA4OMh3BXpPVEVhQigsLOT+o0cPmQbp5uZwOESpnxTFophrwcmTjaIejPFc0ksslJWVzToPHTokqqsci4tLnNDkS61Wi76+PpSWlvI1o6WlhRNdWlhYwP37PaKqKVFcXMyLud0uJvmlpTBOnTolODnGyshoYo78/DzY7XacOXMWc3NzIjEneFPE3QqFApGIjd/rdMXcp4sY8S/F7r173ewcCgVyChWmRCKOgYEBvnPY7TYeJxrOydGgtbUVHR0dXIRSzKQ4fbr5amlpGZqampgVwuEwT4zHE+J+PcsLUHJS7NPNi/qRSISNpEWqq428EHmeTsxgOLYZ2xs4fLiQSzydABkfDpNHX0FzczOzDjFRNBoVni/iRKaEJjtGR0d5bdJFHqZNUWmn0xDw78uYfvmP+KKwb39sf8L+gv9/caY80phJS38AAAAASUVORK5CYII="
          alt="icon"
        />
        <img
          src="data:image/png;base64,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"
          alt="icon"
        />
        <img
          src="data:image/png;base64,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"
          alt="icon"
        />
      </div>
      <div className="footer_3">
        © 2023 zekeLabs Technologies Private Limited
      </div>
    </div>
  );
}
