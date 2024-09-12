import classes from './Loader.module.scss'

export default function Loader() {
	return (
		<div className={classes.wrapperLoader}>
			<div className={classes.loader}></div>
		</div>
	)
}
