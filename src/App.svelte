<script>
	import axios from 'axios';
	import dayjs from 'dayjs';

	import TailwindCss from './TailwindCss.svelte'
	import Button from './components/generic/Button.svelte'
	import Card from './components/generic/Card.svelte'
	import List from './components/generic/List.svelte'
	import ListItem from './components/generic/ListItem.svelte'

	async function fetchEvents(){
		return await axios({
			url: '/api/events'
		})
	}

	let eventsPromise = fetchEvents()
	$: {console.log(eventsPromise)}
</script>
<TailwindCss/>

<main>
	{#await eventsPromise}
		Waiting for the events
	{:then eventsData}
		<Card>
			<List>
				{#each eventsData.data.data as event, i}
						<ListItem active={(i === 0) ? true : false}>
							<span>{event.title}</span>
							<span>{dayjs(event.datetime).format('DD MMM YY')}</span>
							<span>{event.status}</span>
							<Button>Test</Button>
						</ListItem>
				{/each}			
			</List>
		</Card>
	{/await}
	
</main>

<style>
	:root {
		--light-bg: #e4ebf5;
		--light-bg-dark-shadow: #bec8e4;
		--light-bg-light-shadow: #ffffff;

		--dark-bg: #444444;
		--dark-bg-dark-shadow: #363636;
		--dark-bg-light-shadow: #525252;

		--white: #ffffff;
		--black: #000000;

		--primary: #2979ff;
		--primary-dark: #2962ff;
		--primary-light: #82b1ff;

		--error: #ff5252;
		--info: #2196f3;
		--success: #4caf50;
		--warning: #dfa700;

		--g-text-color-light: rgba(0, 0, 0, 0.93);
		--g-text-color-disabled-light: rgba(0, 0, 0, 0.45);
		--g-text-color-secondary-light: rgba(0, 0, 0, 0.7);

		--g-text-color-dark: rgba(255, 255, 255, 0.93);
		--g-text-color-disabled-dark: rgba(255, 255, 255, 0.45);
		--g-text-color-secondary-dark: rgba(255, 255, 255, 0.7);

		--g-bg-color-disabled-light: #dee5e8;
		--g-bg-color-disabled-dark: #727272;
	}

	:global(body){
		background-color: var(--light-bg);
	}

	/* .tile{
		position: relative;
		box-shadow: 0px -6px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);
		background: #f2f2f2;
		cursor: pointer;
		padding: 5px 15px;
		width: 100px;
		height: 150px;
		outline: none;
		border: 0;
		transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	} */
</style>