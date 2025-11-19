import { Fragment } from 'react'
export default function List() {
    return (
        <Fragment>
            <div className='board-function'>
                <div className='post-count'>0 / 0</div>
                <div className='type-toggle'>
                    <button type='button' className='handle-button type-table'>목록으로 보기</button>
                    <button type='button' className='handle-button type-thumbnail'>썸네일로 보기</button>
                </div>
            </div>
            <table className='margin-top-20'>
                <caption>게시판 목록-게시물번호, 제목, 작성자, 작성일, 첨부파일, 조회수</caption>
                <colgroup>
                    <col style={{'width':'50px'}}/>
                    <col/>
                    <col style={{'width':'100px'}}/>
                    <col style={{'width':'120px'}}/>
                    <col style={{'width':'120px'}}/>
                    <col style={{'width':'80px'}}/>
                </colgroup>
                <thead>
                <tr>
                    <th scope='col'>번호</th>
                    <th scope='col'>제목</th>
                    <th scope='col'>작성자</th>
                    <th scope='col'>작성일</th>
                    <th scope='col'>첨부파일</th>
                    <th scope='col'>조회수</th>
                </tr>
                </thead>
                <tbody>
                <tr className='none-post'>
                    <td colSpan={6}>등록된 게시물이 없습니다.</td>
                </tr>
                <tr>
                    <td className='text-align-right'>1</td>
                    <td className='text-align-left'><a href=''>게시물 테스트입니다.</a></td>
                    <td>홍길동</td>
                    <td>2025-10-04</td>
                    <td><button type='button'>첨부파일 보기</button></td>
                    <td>0</td>
                </tr>
                </tbody>
            </table>
            <div className='pagination'>
                <a href='' className='page-arrow first'></a>
                <a href='' className='page-arrow prev'></a>
                <button type='button' className='current-page'>1</button>
                <a href=''>2</a>
                <a href=''>3</a>
                <a href=''>4</a>
                <a href=''>5</a>
                <a href='' className='page-arrow next'></a>
                <a href='' className='page-arrow last'></a>
            </div>
        </Fragment>
    )
}