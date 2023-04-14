import React, { useState, useEffect } from "react"
import { Table } from "antd"
import axios from "axios"
import "./SignUpForm.css"
const apc = process.env.REACT_APP_NEWS_API_KEY

function NewPage() {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "in",
          apiKey: "12bf2524132148f298b4defb21e0cde6",
        },
      })
      .then((response) => {
        setDataSource(response.data.articles)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <a href={record.url} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      render: (source) => source.name,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Date and Time",
      dataIndex: "publishedAt",
      key: "publishedAt",
      render: (text, record) => new Date(record.publishedAt).toLocaleString(),
    },
  ]

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 7 }}
        className="sign-up-form"
      />
    </div>
  )
}

export default NewPage
