import { Pagination } from "components/tables/blocks/Pagination"
import React, { useState } from "react"

export default {
  title: "table/Pagination",
  component: Pagination,
  argTypes: {},
}

const Story = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize)
    setCurrentPage(1)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Pagination with Page Size Selector</h3>
      <Pagination
        page={currentPage}
        pageSize={pageSize}
        totalCount={100}
        onPageChange={setCurrentPage}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  )
}

export const WithPageSizeSelector = Story.bind({})

const StoryWithoutPageSize = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Pagination without Page Size Selector</h3>
      <Pagination
        page={currentPage}
        pageSize={10}
        totalCount={100}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export const WithoutPageSizeSelector = StoryWithoutPageSize.bind({})

const StorySmallDataset = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize)
    setCurrentPage(1)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Pagination with Small Dataset (25 items)</h3>
      <Pagination
        page={currentPage}
        pageSize={pageSize}
        totalCount={25}
        onPageChange={setCurrentPage}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  )
}

export const SmallDataset = StorySmallDataset.bind({})

const StoryLargeDataset = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize)
    setCurrentPage(1)
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Pagination with Large Dataset (500 items)</h3>
      <Pagination
        page={currentPage}
        pageSize={pageSize}
        totalCount={500}
        onPageChange={setCurrentPage}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  )
}

export const LargeDataset = StoryLargeDataset.bind({})
