import style from './style.module.css'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { getProtocolsList } from '../../utils/api'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Surveys Amount',
    dataIndex: 'surveysAmount',
    key: 'surveysAmount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Condition',
    dataIndex: 'condition',
    key: 'condition',
  },
]

function ProtocolList() {
  const [protocolList, setProtocolList] = useState([])
  useEffect(() => {
    getProtocolsList().then((protocols) => setProtocolList(protocols))
  }, [])

  return (
    <div className={style.protocolList}>
      <h1 className={style.title}>Protocol list</h1>
      <Table
        dataSource={protocolList}
        columns={columns}
        // pagination={{ pageSize: 5 }}
      />
      ;
    </div>
  )
}

export default ProtocolList
