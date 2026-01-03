import React from 'react'

function Contact() {
  return (
    <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
        <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">Contact Us</h2>
        <span
          className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full "
        ></span>
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <img
          src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/contact/contact-8.png"
          alt="Contact illustration"
          className="size-full"
        />

        <div>
          <h3 className="text-base-content mb-6 text-2xl font-semibold">Happy to help you!</h3>
          <p className="text-base-content/80 mb-10 text-lg font-medium">
            FlyonUI gives you the blocks and components you need to create a truly professional website, landing page or
            admin panel for your SaaS and gives the blocks.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card shadow-none">
              <div className="card-body items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="border-primary/20 text-primary w-9 rounded-full border">
                    <span className="icon-[tabler--clock] text-primary size-6"></span>
                  </div>
                </div>
                <h4 className="text-base-content text-lg font-medium">Office Hours</h4>
                <div className="text-center">
                  <p className="text-base-content/80">Monday-Friday</p>
                  <p className="text-base-content/80">8:00 am to 5:00 pm</p>
                </div>
              </div>
            </div>

            <div className="card shadow-none">
              <div className="card-body items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="border-primary/20 text-primary w-9 rounded-full border">
                    <span className="icon-[tabler--map-pin] text-primary size-6"></span>
                  </div>
                </div>
                <h4 className="text-base-content text-lg font-medium">Our Address</h4>
                <address className="text-base-content/80 text-center not-italic">
                  802 Pension Rd,Maine
                  <br />
                  96812, USA
                </address>
              </div>
            </div>

            <div className="card shadow-none">
              <div className="card-body items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="border-primary/20 text-primary w-9 rounded-full border">
                    <span className="icon-[tabler--briefcase] text-primary size-6"></span>
                  </div>
                </div>
                <h4 className="text-base-content text-lg font-medium">Office 2</h4>
                <address className="text-base-content/80 text-center not-italic">
                  802 Pension Rd,Maine
                  <br />
                  96812, USA
                </address>
              </div>
            </div>

            <div className="card shadow-none">
              <div className="card-body items-center gap-3">
                <div className="avatar avatar-placeholder">
                  <div className="border-primary/20 text-primary w-9 rounded-full border">
                    <span className="icon-[tabler--phone] text-primary size-6"></span>
                  </div>
                </div>
                <h4 className="text-base-content text-lg font-medium">Get in Touch</h4>
                <div className="text-center">
                  <p className="text-base-content/80">+1-316-688-5685</p>
                  <p className="text-base-content/80">+1-316-477-0169</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
