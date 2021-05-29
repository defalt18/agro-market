import React from 'react'

const styles = {
	footerBackground: {
		background: 'background-color: rgba(0, 0, 0, 0.05)',
	},
}

const Footer = () => {
	return (
		<footer class='text-center text-lg-start bg-light text-muted'>
			<section class='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
				<div class='me-5 d-none d-lg-block'>
					<span>Get connected with us on social networks:</span>
				</div>
				<div>
					<a
						href='https://github.com/defalt18/agro-market.git'
						class='me-4 text-reset'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='26'
							height='26'
							fill='currentColor'
							className='bi bi-github'
							viewBox='0 0 16 16'
						>
							<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
						</svg>
					</a>
				</div>
			</section>

			<section>
				<div class='container text-center text-md-start mt-5'>
					<div class='row mt-3'>
						<div class='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
							<h6 class='text-uppercase fw-bold mb-4'>
								<i class='fas fa-gem me-3'></i>Agro Market
							</h6>
							<p>
								A place where a farmer can connect to his buyer and sell his
								produce as efficiently as possible relieving him of any hassle
								or long queues
							</p>
						</div>

						<div class='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
							<h6 class='text-uppercase fw-bold mb-4'>People</h6>
							<p>
								<a class='text-reset'>Farmers</a>
							</p>
							<p>
								<a class='text-reset'>Mandis</a>
							</p>
							<p>
								<a class='text-reset'>Open Buyers</a>
							</p>
							<p>
								<a class='text-reset'>Community</a>
							</p>
						</div>

						<div class='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
							<h6 class='text-uppercase fw-bold mb-4'>Join In</h6>
							<p>
								<a href='#!' class='text-reset'>
									Login
								</a>
							</p>
							<p>
								<a href='#!' class='text-reset'>
									Register
								</a>
							</p>
						</div>

						<div class='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
							<h6 class='text-uppercase fw-bold mb-4'>Contact</h6>
							<p>
								<i class='fas fa-home me-3'></i> Github : @defalt18
							</p>
							<p>
								<i class='fas fa-envelope me-3'></i>
								201801005@daiict.ac.in
							</p>
						</div>
					</div>
				</div>
			</section>
			<div class='text-center p-4' style={styles.footerBackground}>
				© 2021 Copyright :
				<a class='text-reset fw-bold' href='https://mdbootstrap.com/'>
					Team tagLions
				</a>
			</div>
		</footer>
	)
}

export default Footer
