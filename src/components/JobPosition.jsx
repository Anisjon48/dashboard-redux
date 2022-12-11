import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';

export const JobPosition = ({
	id,
	company,
	logo,
	new: isNew,
	featured,
	position,
	role,
	level,
	postedAt,
	contract,
	location,
	languages,
	tools,
	handleAddFilter = Function.prototype,
}) => {
	const badges = [].concat(role, level, ...languages, ...tools);

	return (
		<Card isFeatured={featured}>
			<div className='job-position'>
				<div className="job-position-info">
					<img className='job-position-avatar'
					src={logo}
					alt={company}
					/>
					<div className="job-position-body">
						<div className="job-position-company">
							<h3>{company}</h3>
							{(isNew || featured) && (
								<Stack>
									{isNew && (
										<Badge variant='rounded' colorScheme='primary'>
											NEW!
										</Badge>
									)}
									{featured && (
										<Badge variant='rounded' colorScheme='dark'>
											FEATURED
										</Badge>
									)}
								</Stack>
							)}
						</div>
						<h2 className='job-position-title'>
							{position}
						</h2>
						<Stack>
							<div className='job-position-meta'>
								{postedAt}
							</div>
							<div className='job-position-meta'>
								{location}
							</div>
						</Stack>
					</div>
				</div>
				<Stack>
					{badges.map(item => (
						<Badge key={item} onClick={() => handleAddFilter(item)} >{item}</Badge>
					))}
				</Stack>
			</div>
		</Card>
	)
}