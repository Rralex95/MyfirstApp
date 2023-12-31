import React from 'react'
import { FlatList, Text, View } from 'react-native'
import repositories from '../data/repositories.js'

const RepositoryList = () => {
    return (
      <FlatList 
        data = {repositories}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({item: repo}) => (
            <View key={repo.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5}}>
                <Text>id: {repo.id}</Text>
                <Text>Fullname: {repo.fullname}</Text>
                <Text>Description: {repo.description}</Text>
                <Text>Language: {repo.language}</Text>
                <Text>Stars: {repo.stargazersCount}</Text>
                <Text>Forks: {repo.forksCount}</Text>
                <Text>Review: {repo.reviewCount}</Text>
                <Text>Rating: {repo.ratingAverage}</Text>
            </View>
        )}
      /> 
    )
}
export default RepositoryList