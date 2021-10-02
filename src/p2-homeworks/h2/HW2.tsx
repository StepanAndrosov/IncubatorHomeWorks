import React, {useState} from 'react'
import Affairs from './Affairs'

// types

export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType
}
export type AffairsType = Array<AffairType>
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairsType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairsType, filter: FilterType): AffairsType => {
    let filteredAffairs
    switch (filter) {
        case 'all':
            return affairs
        case 'high':
            return filteredAffairs = affairs.filter((a => a.priority === 'high'))
        case 'middle':
            return filteredAffairs = affairs.filter((a => a.priority === 'middle'))
        case 'low':
            return filteredAffairs = affairs.filter((a => a.priority === 'low'))
        default:
            return filteredAffairs = affairs
    }
}
export const deleteAffair = (affairs: AffairsType, _id: number): AffairsType => {
     return affairs.filter((item: { _id: number; }) => item._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairsType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
