import classes from './PageError.module.scss'

export default function PageError() {
	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={`${classes.errorPage} bg-slate-200`}>
			<p className={`${classes.textAboutError} mb-4`}>
				There is something wrong with this page, can you refresh the page or go back?
			</p>
			<button type='button' onClick={reloadPage} className={classes.updateButton}>
				Update page
			</button>
		</div>
	)
}
